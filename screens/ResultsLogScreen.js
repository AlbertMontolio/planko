import React from 'react'
import { Text, View, WebView, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import ResultsLog from '../components/organisms/ResultsLog'

class ResultsLogScreen extends React.Component {
  render () {
    return (
      <View>
        <Text>Results Log Screen</Text>
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

export default connect(mapStateToProps)(ResultsLogScreen)
