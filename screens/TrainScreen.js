import React from 'react'
import { 
  Text, 
  View, 
  Dimensions 
} from 'react-native'
import { Icon } from 'react-native-elements'

import styled from 'styled-components'

import Timer from '../components/Timer'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const VideoSquare = styled.View`
  background-color: rgb(100,100,100);
  position: relative;
`

class TrainScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    console.log('navigationOptions')
    return {
      title: 'tesssst',
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        console.log('tabBarIcon')
        return <Icon name='description' size={25} color={tintColor} />
      }
    }
  }

  componentDidMount() {
    console.log('Train Screen this.props', this.props)
  }
  render() {
    return (
      <View>
        <Timer navigation={this.props.navigation} />
      </View>
    )
  }
}

export default TrainScreen
