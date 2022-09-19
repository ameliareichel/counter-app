import React, { Component } from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Clock from './Clock';
import Step from './Step';

//komponent funkcyjny:

// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }


//komponent klasowy:

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            inputValue: 1
        };
    }

    changeValue = (action) => {

        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;
            let step = this.state.inputValue;
            

            if (action === 'add') {
                currentCounterValue += Number(step);
            }
            else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            }
            else {
                currentCounterValue = 0;
            }

            return (
                {
                    counterValue: currentCounterValue
                }
            );
        });
    }

    toggleClock = () => {
        this.setState((prevState) => {
            return({
                showClock: !prevState.showClock
            });
        })
    }

    changeStepsValue = (value) => {
        this.setState({inputValue: value});
    }


    render() {

        let clockElement = '';
        this.state.showClock ? (clockElement = <Clock toggleClockMethod={this.toggleClock} />) : (clockElement = <span className="showClock" onClick={this.toggleClock}>show clock</span>);  

        return (
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} counterStepValue={this.state.inputValue} />
                <Step value={this.state.inputValue} stepMethod={this.changeStepsValue} />
                {clockElement}
            </div>
        )
    }
}

export default Counter;