import React, { Component,Fragment } from 'react'
import ControlButtons from './ControlButtons'
import MajorClock from './MajorClock'
import SplitTimes from './SplitTimes'

class StopWatch extends Component {
  constructor() { 
    super(...arguments)
    this.state = {
      isStarted: false,
      startTime: null,
      currentTime: null,
      splits: []
    }
  }
  render() {
    return (
      <Fragment>
        <MajorClock
          milliseconds={this.state.currentTime - this.state.startTime}
        />
        <ControlButtons
          activated={this.state.isStarted}
          onSplit={this.onSplit}
          onPause={this.onPause}
          onReset={this.onReset}
          onStart={this.onStart}
        />
        <SplitTimes value={this.state.splits}/>
      </Fragment>
    )
  }
  onSplit = () => { 
    this.setState((prevState) => { 
      return {
        splits:[...prevState.splits,prevState.currentTime - prevState.startTime]
      }
    })
  }
  onStart = () => { 
    this.setState(() => ({
      isStarted: true,
      currentTime: new Date(),
      startTime: new Date()
    }))
    this.handleTimer = setInterval(() => { 
      this.setState(() => ({
        currentTime: new Date()
      }))
    }, 1000 / 60)
  }
  onPause = () => { 
    clearInterval(this.handleTimer)
    this.setState(() => ({ 
      isStarted: false
    }))
  }
  onReset = () => { 
    this.setState(() => ({
      currentTime: null,
      startTime: null,
      splits: []
    }))
  }
}

export default StopWatch