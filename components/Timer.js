import React from 'react'
import { 
  Text, 
  View, 
  Button, 
  AsyncStorage,
  Image,
  Dimensions
} from 'react-native'
import { Button as NativeButton } from 'react-native-elements'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {storeTrain as storeTrainAction} from '../state/trains/actions'
import {railsLogout as railsLogoutAction} from '../state/auth/actions'
import { millisToMinutesAndSeconds } from './helpers/dates'

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
    start: 0,
    pics: [
      require('../assets/nadal1.jpg'), 
      require('../assets/nadal2.jpg'),
      require('../assets/nadal3.jpg')
    ],
    picNum: 0
  }

  componentDidMount() {
    console.log('this.state', this.state)
  }

  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    console.log('randomNumber', randomNumber)
    return randomNumber
  }

  // start: Date.now() - this.state.time
  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now()
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1)

    this.picsTimer = setInterval(() => this.setState({
      picNum: this.getRandomInt(0, 2)
    }), 5000)
  }

  stopTimer() {
    this.setState({ isOn: false })
    this.setState({ picNum: 0 })
    clearInterval(this.timer)
    clearInterval(this.picsTimer)

    console.log('auth', this.props.auth)
  
    const train = {
      start: this.state.start,
      time: this.state.time,
      userId: this.props.auth.id
    }

    this.props.storeTrain(train)
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

  async handleLogout() {
    await this.props.railsLogout(this.props.auth)
    this.props.navigation.navigate('Welcome')
  }

  handleGoToWelcome() {
    this.props.navigation.navigate('Welcome')
  }

  render() {
    const dimensions = Dimensions.get('window');
    return (
      <View>
        <Button 
          title='Log out'
          onPress={() => this.handleLogout()}
        />
        <Button 
          title='Go To Welcome'
          onPress={() => this.handleGoToWelcome()}
        />
        <TimerViewer>
          <StyledText>{millisToMinutesAndSeconds(this.state.time)}</StyledText>
        </TimerViewer>
        { this.renderManageBtns() }
        <Image 
          source={this.state.pics[this.state.picNum]}
          style={{ width: dimensions.width, height: 200 }}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {
  storeTrain: storeTrainAction,
  railsLogout: railsLogoutAction
})(Timer)
