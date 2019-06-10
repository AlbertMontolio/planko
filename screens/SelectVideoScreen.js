import React from 'react'
import { Text, View, Dimensions, WebView, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { Button, Icon } from 'react-native-elements'

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
  state = {
    videos: [
      {
        id: 1,
        url: 'https://youtu.be/fhmzmh1W_po?controls=0&showinfo=0'
      },
      {
        id: 2,
        url: 'https://youtu.be/m7lh5-kV1FI'
      },
      {
        id: 3,
        url: 'https://youtu.be/9rdth8OkXfk'
      },
      {
        id: 4,
        url: 'https://youtu.be/0_5lJ7OGMB8'
      }
    ],
    selectedVideo: 1
  }

  onPressHandler = (id) => {
    this.setState({ selectedVideo: id })
  }

  renderTouchableOpacity(id) {
    if (this.state.selectedVideo !== id) {
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
    const { videos } = this.state
    const { navigate } = this.props.navigation
    
    return (
      <View>
        <Text>
          Select Video screennnn
        </Text>
        
        <Videos>
          {videos.map((video) => {
            return (
              <VideoSquare 
                key={video.id}
                style={{ width: SCREEN_WIDTH / 3, height: SCREEN_WIDTH / 3 }}
              >
                {this.renderTouchableOpacity(video.id)}
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
          onPress={() => this.onStartPress(navigate, this.state.selectedVideo)}
        />
      </View>
    )
  }
}

export default SelectVideoScreen
