import React, { Component } from "react";
import ReactDOM from "react-dom";

import Display from "./components/Display";
import Button from "./components/Button";

const buttons = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

class App extends Component {

    state = {
        display: "Please say something"
    }


    componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress =(e)=>{
      console.log(e.key)
  }

  handleClick=(e)=>{
      console.log(e.target.id);
  }

    render() {


        return (

            <div className="App" id="drum-machine">
                <div className="drum-pad-container">

                    {buttons.map((button) => <Button onClick={this.handleClick} key={button} value={button}/>)}

                </div>
                <div className="display">
                    <Display display={this.state.display} />
                </div>


                <h2>Start editing to see some magic happen!</h2>
            </div>
        );
    }

}
export default App;