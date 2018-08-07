import React from 'react';

import '../styles/MessageInput.css';

function changeSmile(str) {
  if (str === ":)") {
    return '🙂';
  }
  if (str === ":D") {
    return '😁';
  }
  if (str === ";)") {
    return '😉'
  }
  if (str === ":|") {
    return '😐';
  }
  if (str === ":P") {
    return '😛';
  }
  if (str === "8-)") {
    return '😎';
  }
  if (str === ":(") {
    return '😞';
  }
  return str;
}

export default function MessageInput({ onSendMessage }) {
    let inputElement = null;
    const onFormSubmit = (e) => {
        e.preventDefault();

        onSendMessage(inputElement.value);
        inputElement.value = '';
    };

    function handleChange() {
       inputElement.value = changeSmile(inputElement.value); 
    };

    return (
        <div className="message-input">
          <form onSubmit={onFormSubmit}>
            <input onChange={handleChange} type="text" ref={el => inputElement = el}/>
            <button>
              Send
            </button>
          </form>
        </div>
    );
}
