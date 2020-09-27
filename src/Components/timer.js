import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 30
        }
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <h1> {count} </h1>
                <audio id="audio-element" >
                    <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
                </audio>
            </div>
        )
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { count } = this.state
            const audioEl = document.getElementById('audio-element')
            if (count === 0) {
                audioEl.play()
                clearInterval(this.myInterval)
                alert("Counter Reached Zero")
            } else {
                this.setState({
                    count: this.state.count - 1
                })
            }
        }, 1000)
    }
}

export default Timer