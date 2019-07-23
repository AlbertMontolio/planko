import React from 'react'
import { 
  Text, 
  View,
  Button,
  AsyncStorage
} from 'react-native'
import { connect } from 'react-redux'
import ResultsLog from '../components/organisms/ResultsLog'
// import { DELETE_ALL_TRAINS } from '../state/trains/types'
import {
  deleteAllTrains as deleteAllTrainsAction,
  sendTrains as sendTrainsAction
} from '../state/trains/actions'
import {getUserTrains} from '../state/trains/helpers'

class ResultsLogScreen extends React.Component {
  handleSendData() {
    console.log('handleSendData')
    const trains = getUserTrains(this.props.trains, this.props.auth.id)
    this.props.sendTrains(this.props.auth, trains)
  }

  handleUserTrains() {
    return getUserTrains(this.props.trains, this.props.auth.id)
  }

  render () {
    return (
      <View>
        <Text>Results Log Screen</Text>
        <Button
          title='Delete all'
          onPress={() => this.props.deleteAllTrains(this.props.auth.id)}
        />
        <Button
          title='Add training'
          onPress={() => this.props.navigation.navigate('AddResultsScreen')}
        />
        <Button
          title='Send datass'
          onPress={() => this.handleSendData()}
        />
        <ResultsLog 
          trains={this.handleUserTrains()}
          total={30}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return { 
    trains: state.trains.trains,
    auth: state.auth
  }
}

export default connect(mapStateToProps, {
  deleteAllTrains: deleteAllTrainsAction,
  sendTrains: sendTrainsAction
})(ResultsLogScreen)
