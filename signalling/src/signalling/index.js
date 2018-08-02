const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');
const Config = require('config');
const uuidv4 = require('uuid/v4');

const log = require('../log')('signalling');
const TurnServer = require('../turn_server');
const Connections = require('../connections');
const auth = require('../auth');

const heartbeatInterval = 30000;
const serverConfig = {
    port: 80
};

const users = new Map();

const validMessages = [
    'ice',
    'signal'
];

function parseMessage(message) {
    try {
        return JSON.parse(message);
    } catch (err) {
        log.error('Bad message', err);
        return null;
    }
}

function sendMessage(socket, message) {
    if (!message || !message.action) {
        return false;
    }

    socket.send(JSON.stringify(message));
    return true;
}

function sendTo(uuid, message) {
    const userData = users.get(uuid);

    if (!userData) {
        return false;
    }

    return sendMessage(userData.socket, message);
}

async function sendICEServers(socket) {
    const token = await TurnServer.createToken();

    sendMessage(socket, {
        action: 'iceServers',
        servers: token.iceServers
    });
}

function getUserList() {
    return [...users].map(([ uuid, userData ]) => {
        return {
            uuid,
            name: userData.name
        };
    });
}

function broadcastUserList(uuid) {
    [...users].forEach(([ userUuid, userData ]) => {
        if (uuid === userUuid) return;

        if (userData.socket.readyState !== WebSocket.OPEN) return;

        sendMessage(userData.socket, {
            action: 'users',
            users: getUserList().filter(({ uuid }) => uuid !== userUuid)
        });
    });
}

async function onJoin(socket, message) {
    log.info('Client joining', message.userId);

    const validLogin = await auth.verify(message.auth);

    if  (!validLogin.verified) {
        log.info('Client not authorized');

        sendMessage(socket, {
            action: 'authNeeded'
        });
        socket.terminate();
        return;
    }

    const uuid = uuidv4();
    const userName = validLogin.userData.name || validLogin.userData.login;

    log.info('Client', message.userId, 'is', userName);

    sendMessage(socket, {
        action: 'joined',
        uuid,
        users: getUserList(),
        userData: validLogin.userData,
        userName
    });

    users.set(uuid, {
        socket,
        name: userName
    });

    broadcastUserList(uuid);

    socket.on('close', onClose.bind(null, uuid));
    sendICEServers(socket);
}

function handleMessage(message) {
    log.info('Got message', message.action, message);

    if (!validMessages.includes(message.action)) {
        log.error('Invalid message', message.action);
        return false;
    }

    const isSent = sendTo(message.for, message);

    if (!isSent) {
        log.info('Message not sent to', message.for, ':', message.action);
    }

    return true;
}

function onMessage(ws, message) {
    const parsed = parseMessage(message);

    if (parsed.action === 'join') {
        onJoin(ws, parsed);
        return;
    }

    if (parsed.action === 'keepAlive') return;

    if (handleMessage(parsed)) return;

    ws.send(JSON.stringify({
        action: 'error',
        error: 'Unknown command'
    }));
}

function onClose(uuid) {
    log.info('Closing connection', uuid);

    const { socket } = users.get(uuid);
    const connection = Connections.getAll().find(({ ws }) => ws === socket);

    Connections.remove(connection.id);
    users.delete(uuid);
    broadcastUserList(uuid);
}

function onPong(connection) {
    connection.isAlive = true;
}

function onConnection(ws, req) {
    const ip = req.headers['x-forwarded-for'];
    log.info('New connection from', ip);

    const connection = Connections.create({
        ws,
        ip
    });

    connection.isAlive = true;

    ws.on('message', onMessage.bind(null, ws));
    ws.on('pong', onPong.bind(null, connection));
}

function initHeartbeat() {
    const interval = setInterval(() => {
        Connections.getAll().forEach((connection) => {
            if (connection.isAlive === false) {
                log.info('Will close connection because of heartbeat');
                connection.ws.terminate();
                Connections.remove(connection);
                return;
            }

            connection.isAlive = false;
            connection.ws.ping('ping', false, true);
        });
    }, heartbeatInterval);
}

function init() {
    const wss = new WebSocket.Server(serverConfig);

    wss.on('connection', onConnection);
    initHeartbeat();

    log.info('Listening on', serverConfig.port);
    return wss;
}

module.exports = {
    init
};
