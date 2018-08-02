import SimplePeer from 'simple-peer';
import SignallingServer from './signalling_server';

const activePeers = new Map();

export function create({ ourUuid, remoteUuid, iceServers, simplePeerConfig }) {
    console.log('Creating peer - ', remoteUuid);
    const peer = new SimplePeer({
        config: {
            iceServers
        },
        ...{ trickle: false },
        ...simplePeerConfig
    });

    peer.on('error', error => console.error(error));
    peer.on('signal', data => {
        SignallingServer.send({
            action: 'signal',
            sdp: data,
            by: ourUuid,
            for: remoteUuid
        });
    });
    peer.on('connect', () => {});

    activePeers.set(remoteUuid, peer);

    return peer;
}

export function isPeerActive(remoteUuid) {
    return activePeers.has(remoteUuid);
}

export function getPeer(remoteUuid) {
    return activePeers.get(remoteUuid);
}

export default {
    create,
    isPeerActive,
    getPeer
};
