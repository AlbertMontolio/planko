import React from 'react'
import { Text, View, Dimensions, WebView, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { Button, Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import * as actions from '../actions'

const SCREEN_WIDTH = Dimensions.get('window').width;

const VideoSquare = styled.View`
  border: 1px solid white;
  background-color: rgb(100,100,100);
  position: relative;
`

const WebViewLayer = styled.View`
  background-color: rgba(200,200,200,0.7);
  position: absolute;
  z-index: 2;
  border: 1px solid white;
  position: absolute;
  top: -1;
  left: -1;
`

const Videos = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const StyledButton = styled.View`
  background-color: rgba(200,200,200,0.7);
  position: absolute;
  top: -1;
  left: -1;
  z-index: 10;
`

class SelectVideoScreen extends React.Component {
  onPressHandler = (videoId) => {
    this.props.selectVideo(videoId)
  }

  renderTouchableOpacity(id, selectedVideoId) {
    if (selectedVideoId !== id) {
      return (
        <TouchableOpacity 
          onPress={() => this.onPressHandler(id)}
          style={{ width: SCREEN_WIDTH / 3, height: SCREEN_WIDTH / 3, backgroundColor: '#a9a9a980', position: 'absolute', zIndex: '5' }}
        >
        </TouchableOpacity>
      )
    }
  }

  onStartPress = (navigate, video) => {
    navigate('Train', { video: video})
  }

  render () {
    const { videos, selectedVideoId } = this.props.videos
    const { navigate } = this.props.navigation
    
    return (
      <View>
        <Text>
          Select Video screennnnn
        </Text>
        
        <Videos>
          {videos.map((video) => {
            return (
              <VideoSquare 
                key={video.id}
                style={{ width: SCREEN_WIDTH / 3, height: SCREEN_WIDTH / 3 }}
              >
                {this.renderTouchableOpacity(video.id, selectedVideoId)}
                <WebView
                  key={video.id}
                  style={{flex:1, width: SCREEN_WIDTH / 3, height: SCREEN_WIDTH / 3, position: 'absolute', top: -1, left: -1}}
                  javaScriptEnabled={true}
                  source={{uri: video.url}}
                />
              </VideoSquare>
            )
          })}
        </Videos>

        <Button
          large
          title='Start'
          backgroundColor='#009688'
          onPress={() => this.onStartPress(navigate, selectedVideoId)}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return { videos: state.videos }
}

export default connect(mapStateToProps, actions)(SelectVideoScreen)
