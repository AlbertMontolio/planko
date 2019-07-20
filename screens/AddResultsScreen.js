import React from 'react'
import {
  Text,
  View,
  TextInput,
  Button,
  DatePickerIOS
} from 'react-native'
import {connect} from 'react-redux'

import * as actions from '../state/trains'

class AddResultsScreen extends React.Component {

  getCurrentDate(date) {
    const basedDate = date
    basedDate.setMinutes(0)
    basedDate.setSeconds(0)
    return basedDate
  }

  state = {
    chosenInitDate: new Date(),
    chosenEndDate: new Date()
  }

  setInitDate = (newInitDate) => {
    const basedInitDate = this.getCurrentDate(newInitDate)
    console.log('newInitDate', newInitDate)
    console.log('basedInitDate', basedInitDate)
    this.setState({chosenInitDate: newInitDate})
  }

  setEndDate = (newEndDate) => {
    this.setState({chosenEndDate: newEndDate})
    console.log('state', this.state)
  }

  addTrain () {
    const train = {
      id: getLastKey(this.props.trains) + 1,
      start: this.state.start,
      time: this.state.time
    }
    this.props.storeTrain(train)
  }

  render () {
    return (
      <View>
        <Text>Add Results Screen</Text>
        <Text>Select Date</Text>
        <DatePickerIOS
          date={this.state.chosenInitDate}
          onDateChange={this.setInitDate}
          mode={'date'}
        />
        <Text>Select Time</Text>
        <DatePickerIOS
          date={this.state.chosenInitDate}
          onDateChange={this.setEndDate}
          mode={'time'}
        />
        
        <Button 
          title='Add training'
          onPress={() => this.addTrain()}
        />
      </View>
    )
  }
}

export default connect(null, actions)(AddResultsScreen)