import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

const ResultsScreen = () => {
  return (
    <Text>
      Results screen
    </Text>
  )
}

function mapStateToProps(state) {
  console.log('general staate', state)
  return {}
}

export default connect(mapStateToProps)(ResultsScreen)
