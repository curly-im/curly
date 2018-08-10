// Inspired by https://blog.inkdrop.info/making-a-syntax-highlighter-using-codemirror-for-reactjs-b8169038432a
// and https://github.com/craftzdog/react-codemirror-runmode/blob/master/src/index.js

import React from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/addon/runmode/runmode';
import 'codemirror/mode/meta';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';

export default function CodeHighlight({ value, language }) {
    const mode = CodeMirror.findModeByName(language);
    const items = [];
    const onNewElement = (token, style) => {
        const prefixedClassName = `cm-${style}`;
        items.push(
            <span className={prefixedClassName} key={items.length + 1}>{token}</span>
        );
    };
    console.log('mode', mode);
    CodeMirror.runMode(value, mode ? mode.mime : language, onNewElement);

    return (
        <pre lang={language} className="cm-s-default">
            <code>
                {items}
            </code>
        </pre>
    );
}
