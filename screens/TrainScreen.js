import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import styled from 'styled-components'

import Timer from '../components/Timer'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const VideoSquare = styled.View`
  background-color: rgb(100,100,100);
  position: relative;
`

const TrainScreen = (props) => {
  return (
    <View>
      <Timer navigation={props.navigation} />
    </View>
  )
}

export default TrainScreen
