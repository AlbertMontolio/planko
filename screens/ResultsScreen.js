import React from 'react'
import { 
  Text, 
  View,
  Button
} from 'react-native'
import { connect } from 'react-redux'

millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

class ResultsScreen extends React.Component {
  displayResults = () => {
    return (
      <View>
        <View>
          <Text>key 1</Text>
        </View>
        <View>
          <Text>key 2</Text>
        </View>
      </View>
    )
  }

  render () {
    return (
      <View>
        <Text>hellooof</Text>
        <Text>hellooo</Text>
        <Text>hellooho</Text>

        {this.props.trains.map((train) => {
          const date = new Date(train.start);
          return (
            <View key={train.start}>
              <Text>{date.toString()}</Text>
              <Text>{millisToMinutesAndSeconds(train.time)}</Text>
              <Text>------</Text>
            </View>
          )
        })}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return { trains: state.trains.trains }
}

export default connect(mapStateToProps)(ResultsScreen)
