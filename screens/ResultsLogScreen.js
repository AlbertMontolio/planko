import React from 'react'
import { 
  Text, 
  View,
  AsyncStorage
} from 'react-native'
import styled from 'styled-components'
import {
  Button
} from 'react-native-elements'

import { connect } from 'react-redux'
import ResultsLog from '../components/organisms/ResultsLog'
// import { DELETE_ALL_TRAINS } from '../state/trains/types'
import {sendTrains as sendTrainsAction} from '../state/trains/actions'
import {getUserTrains} from '../state/trains/helpers'

// TODO refactor

const StyledTitle = styled.View`
  align-items: center;
  margin-top: 20px;
`

const BoldTitle = styled.Text`
  font-weight: bold;
`

const BtnsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 40px;
`

class ResultsLogScreen extends React.Component {
  handleSendData() {
    console.log('handleSendData.')
    const trains = getUserTrains(this.props.trains, this.props.auth.id)
    this.props.sendTrains(this.props.auth, trains)
  }

  handleUserTrains() {
    return getUserTrains(this.props.trains, this.props.auth.id)
  }

  render () {
    return (
      <View>
        <StyledTitle>
          <BoldTitle>All your trainings</BoldTitle>
        </StyledTitle>
        <BtnsWrapper>
          <Button
            title='Add training'
            type='outline'
            onPress={() => this.props.navigation.navigate('AddResultsScreen')}
          />
          <Button
            title='Web sync'
            type='outline'
            onPress={() => this.handleSendData()}
          />
        </BtnsWrapper>
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
  sendTrains: sendTrainsAction
})(ResultsLogScreen)
