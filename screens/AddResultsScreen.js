import React from 'react'
import {
  Text,
  View,
  TextInput,
  Button,
  DatePickerIOS,
  Picker,
  ScrollView
} from 'react-native'
import {connect} from 'react-redux'
import styled from 'styled-components'

import * as actions from '../state/trains'
import { getLastKey } from '../state/trains/helpers'

const StyledTimePicker = styled.View`
  height: 300px;
`

const StyledTimePickers = styled.View`
  display: flex;
  flex-direction: row;
` 

class AddResultsScreen extends React.Component {

  // TODO am i using this method?
  getCurrentDate() {
    const basedDate = new Date()
    basedDate.setMinutes(0)
    basedDate.setSeconds(0)
    return basedDate
  }

  state = {
    chosenInitDate: this.getCurrentDate(),
    chosenEndDate: this.getCurrentDate(),
    chosenMinutes: 0,
    chosenSeconds: 0,
    elapsedTime: 0
  }

  setInitDate = (newInitDate) => {
    // const basedInitDate = this.getCurrentDate(newInitDate)
    this.setState({
      chosenInitDate: newInitDate,
      chosenEndDate: newInitDate
    })
  }

  setEndDate = (newEndDate) => {
    this.setState({chosenEndDate: newEndDate})
  }

  addTrain () {
    const train = {
      start: this.state.chosenInitDate,
      time: this.state.chosenEndDate - this.state.chosenInitDate
    }
    this.props.storeTrain(train)
  }

  generateItems() {
    let minutes = []
    for (i=0; i<=60; i++) {
      minutes.push(i)
    }
    return minutes
  }

  renderTimePicker(typeTime) {
    return (
      <StyledTimePicker>
        <Picker
          selectedValue={this.state[typeTime]}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => {
            // TODO refactor
            if (typeTime === 'chosenMinutes') {
              this.setState({
                chosenMinutes: itemValue,
                chosenEndDate: new Date(this.state.chosenEndDate.setMinutes(itemValue))              })
            } else if (typeTime === 'chosenSeconds') {
              this.setState({
                chosenSeconds: itemValue,
                chosenEndDate: new Date(this.state.chosenEndDate.setSeconds(itemValue))
              })
            }
          }}>
            {this.generateItems().map((item) => {
              return (
                <Picker.Item label={item} value={item} />
              )
            })}
        </Picker>
      </StyledTimePicker>
    )
  }

  render () {
    return (
      <ScrollView>
        <Text>Add Results Screen</Text>
        <Text>Select Date</Text>
        <DatePickerIOS
          date={this.state.chosenInitDate}
          onDateChange={this.setInitDate}
          mode={'date'}
        />
        <StyledTimePickers>
          {this.renderTimePicker('chosenMinutes')}
          {this.renderTimePicker('chosenSeconds')}
        </StyledTimePickers>

        <View>
          <Text>{this.state.chosenInitDate.toString()}</Text>
          <Text>{this.state.chosenEndDate.toString()}</Text>
          <Text>{this.state.chosenMinutes}</Text>
          <Text>{this.state.chosenSeconds}</Text>
        </View>
      
        <Button 
          title='Add training'
          onPress={() => this.addTrain()}
        />
      </ScrollView>
    )
  }
}

export default connect(null, actions)(AddResultsScreen)
