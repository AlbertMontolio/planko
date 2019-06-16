import React from 'react'
import { 
  Text, 
  View,
  Button
} from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const GrayBackground = styled.View`
  background-color: rgb(240,240,240);
`

const StyledTitle = styled.View`
  background-color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-top: 20px;
  borderBottomColor: rgb(240,240,240);
  borderBottomWidth: 1;
`

const StyledResult = styled.View`
  background-color: white;
  padding: 10px;
  borderBottomColor: rgb(240,240,240);
  borderBottomWidth: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledDate = styled.Text`
  width: 200px;
`

class ResultsScreen extends React.Component {

  renderResult(train) {
    const date = new Date(train.start);
    console.log('train', train)
    return (
      <StyledResult key={train.start}>
        <StyledDate>{moment().format('D MMM h:mm a')}</StyledDate>
        <Text>{millisToMinutesAndSeconds(train.time)}</Text>
      </StyledResult>
    )
  }

  render () {
    return (
      <GrayBackground>
        <StyledTitle>
          <Text>
            Results
          </Text>
        </StyledTitle>
        <StyledResult>
          <StyledDate>Date</StyledDate>
          <Text>Time</Text>
        </StyledResult>
        {this.props.trains.map((train) => {
          return this.renderResult(train)
        })}
      </GrayBackground>
    )
  }
}

function mapStateToProps(state) {
  return { trains: state.trains.trains }
}

export default connect(mapStateToProps)(ResultsScreen)
