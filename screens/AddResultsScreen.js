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

  // TODO refactor
  getCurrentDate() {
    const basedDate = new Date()
    basedDate.setHours(8)
    basedDate.setMinutes(0)
    basedDate.setSeconds(0)
    return basedDate
  }

  getEndDate() {
    const basedEndDate = new Date()
    basedEndDate.setHours(8)
    basedEndDate.setMinutes(0)
    basedEndDate.setSeconds(0)
    return basedEndDate
  }

  state = {
    chosenInitDate: this.getCurrentDate(),
    chosenEndDate: this.getEndDate(),
    chosenMinutes: 0,
    chosenSeconds: 0,
    elapsedTime: 0
  }

  setInitDate = (newInitDate) => {
    // const basedInitDate = this.getCurrentDate(newInitDate)
    console.log('newInitDate', typeof newInitDate)
    const chosenEndDateFromInit = JSON.parse(JSON.stringify(newInitDate))
    console.log('chosenEndDateFromInit', typeof chosenEndDateFromInit)

    const chosenEndDateDate = new Date(chosenEndDateFromInit)
    console.log('chosenEndDateDate ---', chosenEndDateDate)
    
    this.setState({
      chosenInitDate: newInitDate,
      chosenEndDate: chosenEndDateDate
    })
  }

  setEndDate = (newEndDate) => {
    this.setState({chosenEndDate: newEndDate})
  }

  addTrain () {
    const train = {
      start: this.state.chosenInitDate.getTime(),
      time: this.state.chosenEndDate - this.state.chosenInitDate,
      userId: this.props.auth.id
    }

    console.log('train addTrainn', train)
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

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(AddResultsScreen)
