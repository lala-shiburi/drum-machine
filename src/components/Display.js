import React, { Component } from 'react'

export default class Display extends Component {
    render() {
        return (
            <div>
                <h1 id="display">{this.props.display}</h1>


            </div>
        )
    }
}
