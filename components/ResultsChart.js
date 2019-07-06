import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import moment from 'moment'
import styled from 'styled-components'
import { 
  VictoryBar, 
  VictoryChart, 
  VictoryTheme,
  VictoryLine
} from "victory-native"

const StyledChart = styled.View`
  background-color: white;
  padding: 10px;
  margin-top: 20px;
`

const StyledTitle = styled.View`
  align-items: center;
`

const ResultsChart = ({ trainings }) => {
  const formattedTrainings = trainings.map((training) => {
    formattedStart = moment(training.start).format('D MMM hh:mm')
    return { x: formattedStart, y: training.time }
  })
  return (
    <StyledChart>
      <StyledTitle>
        <Text>Your Plank's Evolution</Text>
      </StyledTitle>
      <VictoryChart
        theme={VictoryTheme.material}
      >
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
