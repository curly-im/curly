import React from 'react';

import '../styles/LinkButton.css'

class LinkButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        label: props.label,
        onClick: props.onClick}
    }

    render() {
        return <button className="link-button" onClick={this.state.onClick}>{this.state.label}</button>
    }
}

export default LinkButton;

