import SignallingServer from './signalling_server';
import Peer from './peer';

function getCurrentUserUuid(store) {
    return store.getState().currentUser.uuid;
}

function getIceServers(store) {
    return store.getState().iceServers;
}

function createOnJoined(store, actions) {
    return (message) => {
        store.dispatch(actions.setCurrentUser({
            name: message.userName,
            userData: message.userData,
            uuid: message.uuid
        }));
        store.dispatch(actions.setContacts(message.users));
    };
}

function createOnUsers(store, actions) {
    return (message) => store.dispatch(actions.setContacts(message.users));
}

function createOnIceServers(store, actions) {
    return (message) => {
        store.dispatch(actions.setIceServers(message.servers));
    };
}

function createOnSignal(store, actions) {
    return (message) => {
        const { dispatch } = store;
        const ourUuid = getCurrentUserUuid(store);
        const remoteUuid = message.by;
        const signalData = message.sdp;
        const iceServers = getIceServers(store);

        console.log(`[${ourUuid}]`, 'Incoming: signal - by', remoteUuid);

        const remotePeer = (() => {
            if (Peer.isPeerActive(remoteUuid)) return Peer.getPeer(remoteUuid);

            return Peer.create({
                ourUuid,
                remoteUuid,
                iceServers,
                simplePeerConfig: { initiator: false }
            });
        })();

        remotePeer.signal(signalData);
        remotePeer.on('data', data => {
            const message = JSON.parse(data.toString());

            console.log('Data', remoteUuid, message);

            if (remoteUuid !== store.getState().conversations.current.userId) {dispatch(actions.incrementUnreadMessagesIndicator({ contactId: remoteUuid }) )}
            
            dispatch(actions.message({
                contactId: remoteUuid,
                message: { ...message, ...{ incoming: true } }
            }));
        });
    };
}

function dispatchOnMessage(store, actions) {
    const messageTypeToListener = new Map([
        [ 'joined', createOnJoined(store, actions) ],
        [ 'users', createOnUsers(store, actions) ],
        [ 'iceServers', createOnIceServers(store, actions) ],
        [ 'signal', createOnSignal(store, actions) ],
        [ 'authNeeded', message => { throw message } ]
    ]);

    return (messageType, message) => {
        messageTypeToListener.get(messageType)(message);
    };
}

export function init(store, actions, authCookie) {
    SignallingServer.init({
        userId: authCookie.user,
        authType: authCookie.type,
        token: authCookie.token
    }, dispatchOnMessage(store, actions));
}

export default {
    init
};
