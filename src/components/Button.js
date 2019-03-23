import React, { Component } from 'react'


export default class Button extends Component {
    render() {
        return (
            <div>
                <button id={this.props.value} onClick={this.props.onClick} className="drum-pad">{this.props.value}</button>
            </div>
        )
    }
}
