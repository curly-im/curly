const signallingServerURL = (() => {
    const { hostname } = window.location;
    return `wss://signalling.${hostname}`;
})();
let socket = null;

export function send(message) {
    console.log('>>>>>', 'Sending', message.action, JSON.stringify(message));
    socket.send(JSON.stringify(message));
}

function onOpen({ userId, authType, token }) {
    send({
        action: 'join',
        auth: {
            type: authType,
            token,
            userId
        }
    });
}

export function onMessage(callback) {
    return event => {
        const message = JSON.parse(event.data);
        console.log('Got message', message.action, event.data);
        callback(message.action, message);
    };
}

function onClose() {
    console.warn('WebSocket closing');
}

export function init(joinConfig, onMessageCallback) {
    socket = new WebSocket(signallingServerURL);

    [
        [ 'open', onOpen.bind(null, joinConfig) ],
        [ 'message', onMessage(onMessageCallback) ],
        [ 'close', onClose ]
    ]
        .forEach(([ eventName, listener ]) => {
            socket.addEventListener(eventName, listener);
        });
}

export default {
    init,
    send
};
