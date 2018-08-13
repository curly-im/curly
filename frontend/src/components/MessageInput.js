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

export default function MessageInput({ onSendMessage }) {
    let inputElement = null;
    let code = '';

    const onFormSubmit = (e) => {
        e.preventDefault();

        onSendMessage({
            text: inputElement.value,
            code
        });
        inputElement.value = '';
    };

    const handleChange = () => {
        const { selectionStart, selectionEnd } = inputElement;
        inputElement.value = changeTextToEmoji(inputElement.value);
        inputElement.setSelectionRange(selectionStart, selectionEnd);
    };

    const handleCodeChange = (codeEditorValue) => code = codeEditorValue;

    let editorVisible = false;
    const editorClassName = () => editorVisible ? '' : 'hidden';
    const writeCodeSpanClassName = () => editorVisible ? 'hidden' : '';

    const toggleEditorVisibility = () => {
        editorVisible = !editorVisible;
    };

    return (
        <div className="message-input">
            <form onSubmit={onFormSubmit}>
                <input onChange={handleChange} type="text" ref={el => inputElement = el}/>
                    <button>
                        Send
                    </button>
            </form>
            <div>
                <span className={writeCodeSpanClassName()} onClick={toggleEditorVisibility}>Write code</span>
                <CodeEditor className={editorClassName()} onChange={handleCodeChange}/>
            </div>
        </div>
    );
}
