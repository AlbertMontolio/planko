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
import * as actions from '../state/trains'

class ResultsLogScreen extends React.Component {
  render () {
    return (
      <View>
        <Text>Results Log Screen</Text>
        <Button
          title='Delete all'
          onPress={() => this.props.deleteAllTrains()}
        />
        <ResultsLog 
          trains={this.props.trains}
          total={30}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return { trains: state.trains.trains }
}

export default connect(mapStateToProps, actions)(ResultsLogScreen)
