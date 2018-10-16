import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.props = {
            variant: this.props.variant
        }
    }

    render() {
        return (
            <button className={`ui ${this.props.variant}`}>

            </button>
        )
    }
}