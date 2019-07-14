import React from 'react'
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Button
} from 'react-native'
import styled from 'styled-components'
import ResultLog from '../molecules/ResultLog'
// import { ScrollView } from 'react-native-gesture-handler';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view'

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
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  standalone: {
    marginTop: 30,
    marginBottom: 30,
  },
  standaloneRowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    justifyContent: 'center',
    height: 50,
  },
  standaloneRowBack: {
    alignItems: 'center',
    backgroundColor: 'orange',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  controls: {
    alignItems: 'center',
    marginBottom: 30,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  switch: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    width: 100,
  },
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

const deleteResult = (train) => {
  console.log('deleting resultttt')
  console.log('train idddd', train.item.id)
}

const ResultsLog = ({trains, total}) => {
  return (
    <StyledResults>
      <StyledResult>
        <StyledDate>Date</StyledDate>
        <Text>Time</Text>
      </StyledResult>

      <SwipeListView
          useFlatList
          data={trains.slice(0, total)}
          renderItem={ (train, rowMap) => {
            console.log('hola')
            console.log('hola train', train.item.id)
            return (
              <SwipeRow leftOpenValue={75} rightOpenValue={-150}>
                <View style={styles.hiddenRowWrapper}>
                  <View style={styles.hiddenBtnsWrapper}>
                    <Button 
                      title='Edit'
                    />
                    <Button 
                      title='Delete'
                      onPress={() => deleteResult(train)}
                    />
                  </View>
                </View>
                <ResultLog 
                  train={train.item}
                  key={train.date}
                />
              </SwipeRow>
            )
          }}
  
          leftOpenValue={75}
          rightOpenValue={-75}
      />
    </StyledResults>
  )
}

export default ResultsLog
