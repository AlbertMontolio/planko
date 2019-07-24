import React from 'react'
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Button
} from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'

import ResultLog from '../molecules/ResultLog'
// import { ScrollView } from 'react-native-gesture-handler';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view'
import * as actions from '../../state/trains'

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

const styles = StyleSheet.create({
  hiddenRowWrapper: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'flex-end'
  },
  hiddenBtnsWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
  }
})

// trains, total
class ResultsLog extends React.Component {
  renderSwipeRow(train) {
    return (
      <SwipeRow 
        leftOpenValue={75} 
        rightOpenValue={-150}
      >
        <View style={styles.hiddenRowWrapper}>
          <View style={styles.hiddenBtnsWrapper}>
            <Button title='Edit'/>
            <Button 
              title='Delete'
              onPress={() => this.props.deleteTrain(train.id)}
            />
          </View>
        </View>
        <ResultLog train={train}/>
      </SwipeRow>
    )
  }

  render () {
    const {trains, total} = this.props

    return (
      <StyledResults>
        <StyledResult>
          <StyledDate>Date</StyledDate>
          <Text>Time</Text>
        </StyledResult>

        <SwipeListView
          useFlatList
          data={trains}
          renderItem={ (train, rowMap) => {
            return (
              this.renderSwipeRow(train.item)
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
      </StyledResults>
    )
  }
}

export default connect(null, actions)(ResultsLog)
