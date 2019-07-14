import React from 'react'
import { 
  Text, 
  View,
  Button,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'

import ResultsChart from '../components/ResultsChart'
import ResultsLog from '../components/organisms/ResultsLog'

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

class ResultsScreen extends React.Component {
  render () {
    return (
      <GrayBackground>
        <ScrollView>
          <StyledTitle>
            <Text>
              Results
            </Text>
          </StyledTitle>
          <ResultsChart trainings={this.props.trains} />
          <ResultsLog 
            trains={this.props.trains}
            total={5}
          />
          <Button
            title='More results'
            onPress={() => this.props.navigation.navigate('ResultsLogScreen')}
          />
        </ScrollView>
      </GrayBackground>
    )
  }
}

function mapStateToProps(state) {
  return { trains: state.trains.trains }
}

export default connect(mapStateToProps)(ResultsScreen)
