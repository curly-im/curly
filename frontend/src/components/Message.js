import React from 'react';

import { messageTypes } from '../lib/message';
import CodeHighlight from './CodeHighlight';

import '../styles/Message.css';

export default function Message({ message, contact }) {
    const messageTypeClass = message.incoming ? 'incoming' : 'outgoing';
    const className = `message ${messageTypeClass}`;
    const messageContent = () => {
        if (message.type === messageTypes.code) {
            return <CodeHighlight language={message.content.mode} value={message.content.value} />;
        }

        return message.content;
    };

    return (
        <div className={className}>
            <span className="sender-name">
                <i>({messageTypeClass}) {contact.name}</i>
            </span>
            <div>
                {messageContent()}
            </div>
        </div>
    );
}
