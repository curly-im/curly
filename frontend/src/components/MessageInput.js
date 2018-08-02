import React from 'react';

import '../styles/MessageInput.css';

export default function MessageInput({ onSendMessage }) {
    let inputElement = null;
    const onFormSubmit = (e) => {
        e.preventDefault();

        onSendMessage(inputElement.value);
        inputElement.value = '';
    };

    return (
        <div className="message-input">
          <form onSubmit={onFormSubmit}>
            <input type="text" ref={el => inputElement = el}/>
            <button>
              Send
            </button>
          </form>
        </div>
    );
}
