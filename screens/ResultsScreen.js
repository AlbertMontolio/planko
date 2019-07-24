import React from 'react'
import { 
  Text, 
  View,
  ScrollView
} from 'react-native'

import {
  Button
} from 'react-native-elements'

import { connect } from 'react-redux'
import styled from 'styled-components'

import ResultsChart from '../components/ResultsChart'
import ResultsLog from '../components/organisms/ResultsLog'

import {getUserTrains} from '../state/trains/helpers'

const GrayBackground = styled.View`
  background-color: rgb(240,240,240);
`

const MoreLogs = styled.View`
  padding: 20px 40px;
  background-color: white;
`

class ResultsScreen extends React.Component {
  handleUserTrains() {
    return getUserTrains(this.props.trains, this.props.auth.id)
  }
  render () {
    return (
      <GrayBackground>
        <ScrollView>
          <ResultsChart trainings={this.handleUserTrains()} />
          <ResultsLog 
            trains={this.handleUserTrains()}
            total={5}
          />
          <MoreLogs>
            <Button
              title='More results'
              type='outline'
              onPress={() => this.props.navigation.navigate('ResultsLogScreen')}
            />
          </MoreLogs>
        </ScrollView>
      </GrayBackground>
    )
  }
}

function mapStateToProps(state) {
  return { 
    trains: state.trains.trains,
    auth: state.auth
  }
}

export default connect(mapStateToProps)(ResultsScreen)
