import React from 'react';

import CodeEditor from './CodeEditor';

import '../styles/MessageInput.css';

export function changeTextToEmoji(messageText) {
    const supportedEmojisRegExp = /:\)|:D|;\)|:\||:P|8-\)|:\(/;

    return messageText.replace(supportedEmojisRegExp, rawEmoji => {
        if (rawEmoji === ":)") {
            return '🙂';
        }
        if (rawEmoji === ":D") {
            return '😁';
        }
        if (rawEmoji === ";)") {
            return '😉';
        }
        if (rawEmoji === ":|") {
            return '😐';
        }
        if (rawEmoji === ":P") {
            return '😛';
        }
        if (rawEmoji === "8-)") {
            return '😎';
        }
        if (rawEmoji === ":(") {
            return '😞';
        }

        return rawEmoji;
    });
}

export default class MessageInput extends React.Component {
    inputElement = null;
    codeConfig = '';

    constructor(props) {
        const { onSendMessage } = props;

        super(props);
        this.onSendMessage = onSendMessage;
    }

    render() {
        const onFormSubmit = (e) => {
            e.preventDefault();

            this.onSendMessage({
                text: this.inputElement.value,
                code: this.codeConfig
            });

            this.inputElement.value = '';
            this.codeConfig = { value: '' };
        };

        const handleChange = () => {
            const { inputElement } = this;
            const { selectionStart, selectionEnd } = inputElement;
            inputElement.value = changeTextToEmoji(inputElement.value);
            inputElement.setSelectionRange(selectionStart, selectionEnd);
        };

        const handleCodeChange = (codeEditorValue) => this.codeConfig = codeEditorValue;

        return (
            <div className="message-input">
                <form onSubmit={onFormSubmit}>
                    <input onChange={handleChange} type="text" ref={el => this.inputElement = el}/>
                        <button>
                            Send
                        </button>
                </form>
                <CodeEditor onChange={handleCodeChange} value={this.codeConfig.value} />
            </div>
        );
    }
}
