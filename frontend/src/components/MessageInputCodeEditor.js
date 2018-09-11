import React from 'react';

import CodeEditor from './CodeEditor';

export default function MessageInputCodeEditor(props) {
    const onHideEditor = (event) => {
        event.stopPropagation();
        props.onVisibilityChange(false);
    };
    const onShowEditor = () => props.onVisibilityChange(true);

    const editorVisible = (
        <div>
            <div onClick={onHideEditor} data-test-close-button>&times;</div>
            <CodeEditor onChange={props.onChange} value={props.value} />
        </div>
    );
    const editorHidden = (
        <span>Click to write code in {props.language}</span>
    );

    return (
        <div onClick={onShowEditor}>
            {props.isVisible ? editorVisible : editorHidden}
        </div>
    );
}
