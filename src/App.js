import React, { Component } from "react";
import ReactDOM from "react-dom";

import Display from "./components/Display";
import Button from "./components/Button";
import buttonData from './components/buttonData';

const buttons = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
const bData = buttonData();
class App extends Component {

    state = {
        display: "Play some drums"
    }


    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleKeyPress = (e) => {
        let pressed = e.key.toUpperCase();
        console.log(pressed)
        console.log(buttons.indexOf(pressed))
        if (buttons.indexOf(pressed) >= 0) {
            let button = document.getElementById(e.key.toUpperCase());

            button.children[0].currentTime = 0;
            button.children[0].play();
            button.classList.toggle("active");
            setTimeout(() => { button.classList.toggle("active") }, 100);
            this.setState({
                display: button.value
            })

        }


    }

    handleClick = (e) => {
        console.log(e.target.id);
        console.log(e.target.classList);
        const event = e;
        const eventClass = e.target.classList;
        event.target.children[0].currentTime = 0;
        event.target.children[0].play();
        event.target.classList.toggle("active");
        this.setState({
            display: event.target.value
        })
        setTimeout(() => { eventClass.toggle("active") }, 100);
    }

    render() {


        return (

            <div className="App" id="drum-machine">

                <div className="display">
                    <Display display={this.state.display} />
                </div>

                <div className="drum-pad-container">

                    {buttons.map((button, i) => <Button value={bData[i]['id']} url={bData[i]['url']} onClick={this.handleClick} key={button} id={button} />)}

                </div>




            </div>
        );
    }

}
export default App;