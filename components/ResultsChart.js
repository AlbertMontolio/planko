import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import styled from 'styled-components'
import { 
  VictoryBar, 
  VictoryChart, 
  VictoryTheme,
  VictoryLine,
  VictoryAxis
} from 'victory-native'

import {
  millisToMinutesAndSeconds,
  formatDate
} from './helpers/dates'

const StyledChart = styled.View`
  background-color: white;
  padding: 10px;
  margin-top: 20px;
`

const StyledTitle = styled.View`
  align-items: center;
  margin-top: 20px;
`

const BoldTitle = styled.Text`
  font-weight: bold;
`

const ResultsChart = ({ trainings }) => {
  const formattedTrainings = trainings.map((training) => {
    const formattedStart = formatDate(training.start, 'D.M')
    const formattedTime = millisToMinutesAndSeconds(training.time)
    return { x: formattedStart, y: training.time }
  })
  return (
    <StyledChart>
      <StyledTitle>
        <BoldTitle>Your Plank's Evolution</BoldTitle>
      </StyledTitle>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc"}
          }}
          data={formattedTrainings}
        />
      </VictoryChart>
    </StyledChart>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});

export default ResultsChart
