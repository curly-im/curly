import React, { Component } from 'react';
import CodeMirror from 'codemirror';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';

export default class CodeEditor extends Component {
    editorElement: null;

    constructor(props) {
        super(props);

        this.onChange = props.onChange;
        this.state = {
            value: this.props.value,
            readOnly: this.props.readOnly,
            mode: this.props.mode
        };
    }

    componentDidMount() {
        this.codeMirrorInstance = CodeMirror(this.editorElement, {
            mode: this.state.mode || 'javascript',
            value: this.state.value || '',
            readOnly: this.state.readOnly
        });
        this.codeMirrorInstance.on('change', () => {
            this.onChange({
                value: this.codeMirrorInstance.getValue(),
                mode: this.codeMirrorInstance.getMode().name
            });
        });
    }

    render() {
        return (<div ref={element => this.editorElement = element}></div>);
    }
}
