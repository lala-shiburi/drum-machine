import React, { Component } from 'react';
import buttonData from './buttonData';

const data = buttonData();
console.log(data[1]['url']);
export default class Button extends Component {

    render() {
        return (
            <div>

                <button id={this.props.id} value={this.props.value} onClick={this.props.onClick} className="drum-pad">{this.props.id}
                    <audio src={this.props.url} id={this.props.id} className="clip"></audio>
                </button>
            </div>
        )
    }
}
