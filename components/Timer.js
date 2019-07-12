import React from 'react'
import { Text, View, Button, AsyncStorage } from 'react-native'
import { Button as NativeButton } from 'react-native-elements'

import { connect } from 'react-redux'
import styled from 'styled-components'

import * as actions from '../state/trains'

const BtnsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-grow: 1;
  justify-content: space-between;
  padding: 20px 20px;
`

const TimerViewer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(250,250,250);
  padding: 40px 0px;
`

const StyledText = styled.Text`
  font-size: 40px;
`

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

  getLastId = async () => {
    const keys = await AsyncStorage.getAllKeys()
    try {
      lastKey = keys[keys.length - 1]
    } catch(error) {
      console.log(error)
    }
  }

  _storeData = async (start, time) => {
    const allKeys = await AsyncStorage.getAllKeys()
    try {
    } catch (error) {
      console.log('error', erro)
    }
    
    let lastId = await this.getLastId()
    try {
      await AsyncStorage.setItem('My key', 'I like to save it')
    } catch (error) {
      console.log(error)
    }
  }

  stopTimer() {
    this.setState({ isOn: false })
    clearInterval(this.timer)
    const train = {
      start: this.state.start,
      time: this.state.time
    }
    this.props.storeTrain(train)
    this._storeData()
  }

  resetTimer() {
    this.setState({time: 0, isOn: false})
  }

  renderManageBtns() {
    let start = (this.state.time === 0 || !this.state.isOn) ? (
      <NativeButton 
        onPress={() => this.startTimer()} 
        title='Start' 
        type='outline'
        disabled={this.state.time !== 0 && !this.state.isOn}
      />
    ) : null
    let reset = (
      <NativeButton onPress={() => this.resetTimer()} title='Reset' type='outline'/>
    )
    let stop = (this.state.time == 0 || !this.state.isOn) ? null : (
      <NativeButton onPress={() => this.stopTimer()} title='Stop' type='outline'/>
    )

    return (
      <View>
        <BtnsWrapper>
          {reset}
          {start}
          {stop}
        </BtnsWrapper>
      </View>
    )
  }

  render() {
    return (
      <View>
        <TimerViewer>
          <StyledText>{this.millisToMinutesAndSeconds(this.state.time)}</StyledText>
        </TimerViewer>
        { this.renderManageBtns() }
      </View>
    )
  }
}

export default connect(null, actions)(Timer)
