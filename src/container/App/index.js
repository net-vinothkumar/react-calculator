import React, {Component} from 'react';
import Title from "../../Title";
import Number from "../../components/Number";
import Add from "../../components/Add";
import Equals from "../../components/Equals";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: null,
            nextNumber: null,
            operationName: null
        };
    }

    buttonClickHandler(event) {
        this.setState(this.state.nextNumber = event.target.value);
    }

    buttonAddHandler(event) {
        this.setState(this.state.operationName = event.target.value);
    }

    buttonResultHandler(event) {
        if (this.state.operationName === '+') {
            this.setState(this.state.result += this.state.nextNumber);
        }
    }

    render() {
        return (
            <div>
                <Title text="Calculator"></Title>
                <form name="calculator">
                    <input type="text" name="answer"/><br>{this.state.result}</br>
                    <Number value="1" onClick={this.buttonClickHandler}>1</Number>
                    <Number value="2" onClick={this.buttonClickHandler}>2</Number>
                    <Number value="3" onClick={this.buttonClickHandler}>3</Number>
                    <Add value="+" onClick={this.buttonAddHandler}>+</Add>
                    <br></br>
                    <Number value="4" onClick={this.buttonClickHandler}>4</Number>
                    <Number value="5" onClick={this.buttonClickHandler}>5</Number>
                    <Number value="6" onClick={this.buttonClickHandler}>6</Number><br></br>
                    <Number value="7" onClick={this.buttonClickHandler}>7</Number>
                    <Number value="8" onClick={this.buttonClickHandler}>8</Number>
                    <Number value="9" onClick={this.buttonClickHandler}>9</Number>
                    <Equals value="=" onClick={this.buttonResultHandler}>=</Equals>
                </form>
            </div>
        );
    }
}

export default App;