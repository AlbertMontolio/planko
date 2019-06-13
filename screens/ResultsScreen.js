import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

const ResultsScreen = (props) => {
  console.log('props.trains', props.trains)
  return (
    <View>
      <Text>hellooo</Text>
      <Text>hellooo</Text>
      <Text>hellooo</Text>
      {props.trains.map((train) => {
        return (
          <View key={train.start}>
            <Text>{train.start}</Text>
            <Text>{train.time}</Text>
            <Text>------</Text>
          </View>
        )
      })}
    </View>
  )
}

function mapStateToProps(state) {
  console.log('general staate', state)
  return { trains: state.trains.trains }
}

export default connect(mapStateToProps)(ResultsScreen)
