import React from 'react'
import { Text, View, WebView, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Timer from '../components/Timer'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const VideoSquare = styled.View`
  background-color: rgb(100,100,100);
  position: relative;
`

const TrainScreen = (props) => {
  const { videos, selectedVideoId } = props.videos
  const selectedVideo = videos[selectedVideoId]
  return (
    <View>
      <Text>Train screen</Text>
      <Timer />
    </View>
  )
}

function mapStateToProps(state) {
  return { videos: state.videos }
}

export default connect(mapStateToProps)(TrainScreen)
