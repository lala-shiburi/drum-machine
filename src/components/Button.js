import React, { Component } from 'react';
import buttonData from './buttonData';

const data = buttonData();
console.log(data[1]['url']);
export default class Button extends Component {

    render() {
        return (
            <div>

                <button id={this.props.value} onClick={this.props.onClick} className="drum-pad">{this.props.value}
                    <audio src={this.props.url}></audio>
                </button>
            </div>
        )
    }
}
