import React, {Component} from 'react';
import './index.css'

export default class Dice extends Component {
    state = {
        press: '',
        click1: '',
        click2: '',
        click3: '',
        click4: ''
    }

    keyUp = (e) => {
        if (e.key === ' ') {
            this.setState({ press: Math.floor(Math.random() * 6 + 1) })
        }
    }
    zer1 = () => {
        this.setState({click1: Math.floor(Math.random() * 6 + 1) })
    }
    zer2 = () => {
        this.setState({click2: Math.floor(Math.random() * 6 + 1) })
    }
    zer3 = () => {
        this.setState({click3: Math.floor(Math.random() * 6 + 1) })
    }
    zer4 = () => {
        this.setState({click4: Math.floor(Math.random() * 6 + 1) })
    }
    componentDidMount() {
        window.addEventListener("keyup", this.keyUp);

    }

    render() {
        return (
            <div className="all-div">
                <span>press the space button</span>
                <div className="div">
                    <p>{this.state.press}</p>
                </div>
                <span>click the block</span>
                <div className="block">
                    <div onClick={this.zer1} className="div">
                        <p>{this.state.click1}</p>
                    </div>
                    <div onClick={this.zer2} className="div">
                        <p>{this.state.click2}</p>
                    </div>
                    <div onClick={this.zer3} className="div">
                        <p>{this.state.click3}</p>
                    </div>
                    <div onClick={this.zer4} className="div">
                        <p>{this.state.click4}</p>
                    </div>
                </div>
            </div>
        )
    }
}