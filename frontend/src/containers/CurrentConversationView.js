import React from 'react';

import Peer from '../lib/peer';
import Message, { messageTypes } from '../lib/message';
import ConversationView from '../components/ConversationView';
import { connect } from 'react-redux';
import { message as messageAction } from '../store/actions';

const mapStateToProps = state => {
    const currentConversation = state.conversations.current;

    return {
        currentConversation,
        currentUser: state.currentUser,
        iceServers: state.iceServers,
        messages: state.messages.get((currentConversation.contact || {}).uuid)
    };
};
const mapDispatchToProps = dispatch => {
    return {
        dispatchMessage: (contactId, message) => {
            dispatch(messageAction({
                contactId, // remote contact
                message: { ...message, ...{ incoming: false } }
            }));
        }
    };
};

async function getOrCreatePeer(remoteUuid, currentUser, iceServers) {
    return new Promise((resolve, reject) => {
        if (Peer.isPeerActive(remoteUuid)) {
            resolve(Peer.getPeer(remoteUuid));
            return;
        }

        const peer = Peer.create({
            ourUuid: currentUser.uuid,
            remoteUuid,
            iceServers,
            simplePeerConfig: { initiator: true }
        });

        peer.on('connect', () => resolve(peer));
    });
}

export function CurrentConversationView({ currentConversation, currentUser, iceServers, messages, dispatchMessage }) {
    const onOutgoingMessage = async (message) => {
        const remoteUuid = currentConversation.contact.uuid;
        const peer = await getOrCreatePeer(remoteUuid, currentUser, iceServers);

        const outgoingMessage = Message.create(messageTypes.text, message);
        peer.send(JSON.stringify(outgoingMessage));
        dispatchMessage(remoteUuid, outgoingMessage);
    };

    return (
        <ConversationView conversation={currentConversation} onSendMessage={onOutgoingMessage} messages={messages}/>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentConversationView);
