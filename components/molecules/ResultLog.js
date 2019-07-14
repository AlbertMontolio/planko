import React from 'react'
import {
  Text
} from 'react-native'
import styled from 'styled-components'
import { 
  millisToMinutesAndSeconds,
  formatDate
} from '../helpers/dates'

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

const ResultLog = ({train}) => (
  <StyledResult key={train.start}>
    <StyledDate>
      {formatDate(train.start, 'D MMM h:mm a')}
    </StyledDate>
    <Text>{millisToMinutesAndSeconds(train.time)}</Text>
  </StyledResult>
)

export default ResultLog