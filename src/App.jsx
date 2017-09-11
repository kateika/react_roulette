import React from 'react';
import logo from './images/logo.png';
import * as style from './styles/style.css';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <img src={logo} />
                <p className={style.mainCaption}>It's ALIIIIVEEE!</p>
                <Timer />
            </div>
        )
    }
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { secondsElapsed: 0 };
    }

    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>Seconds Elapsed: {this.state.secondsElapsed} sec</div>
        );
    }
}