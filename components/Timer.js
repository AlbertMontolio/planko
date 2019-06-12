import React from 'react'
import { Text, View, Button } from 'react-native'

export default class Timer extends React.Component {
  state = {
    init: 0,
    end: 0,
  }

  timer = null

  componentDidMount() {
    let i = 0
    this.timer = setInterval(() => {
      this.setState({ end: i })
      i = i + 1
    }, 1000);
  }

  onStopPress() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <View>
        <Text>Timer in component</Text>
        <Text>{this.state.end}</Text>
        <Button
          title='Stop'
          onPress={() => this.onStopPress()}
        />
      </View>
    )
  }
}