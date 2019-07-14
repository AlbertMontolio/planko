import React from 'react'
import {
  Text,
  ScrollView
} from 'react-native'
import styled from 'styled-components'
import ResultLog from '../molecules/ResultLog'
// import { ScrollView } from 'react-native-gesture-handler';

const StyledResult = styled.View`
  background-color: white;
  padding: 10px;
  borderBottomColor: rgb(240,240,240);
  borderBottomWidth: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledResults = styled.View`
  margin: 20px 0px;
`

const StyledDate = styled.Text`
  width: 200px;
`

const ResultsLog = ({trains, total}) => {
  return (
    <ScrollView>
      <StyledResults>
        <StyledResult>
          <StyledDate>Date</StyledDate>
          <Text>Time</Text>
        </StyledResult>
        {trains.slice(0, total).map((train) => {
          return (<ResultLog 
            train={train}
            key={train.date}
          />)
        })}
      </StyledResults>
    </ScrollView>
  )
}

export default ResultsLog
