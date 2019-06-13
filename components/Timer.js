import React from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'

import * as actions from '../state/trains'

class Timer extends React.Component {
  state = {
    time: 0,
    isOn: false,
    start: 0
  }

  millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  
  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1)
  }

  stopTimer() {
    this.setState({ isOn: false })
    clearInterval(this.timer)
    const train = {
      start: this.state.start,
      time: this.state.time
    }
    this.props.storeTrain(train)
  }

  resetTimer() {
    this.setState({time: 0, isOn: false})
  }

  render() {
    let start = (this.state.time == 0) ? (
      <Button onPress={() => this.startTimer()} title='Start'></Button>
    ) : null
    let stop = (this.state.time == 0 || !this.state.isOn) ? null : (
      <Button onPress={() => this.stopTimer()} title='Stop'></Button>
      )
    let resume = (this.state.time == 0 || this.state.isOn) ? null : (
      <Button onPress={() => this.startTimer()} title='Resume'></Button>
    )
    let reset = (this.state.time == 0 || this.state.isOn) ? null : (
      <Button onPress={() => this.resetTimer()} title='Reset'></Button>
    )

    return (
      <View>
        <Text>{this.millisToMinutesAndSeconds(this.state.time)}</Text>
        {start}
        {resume}
        {stop}
        {reset}
      </View>
    )
  }
}

export default connect(null, actions)(Timer)
