import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

class SettingsScreen extends React.Component {
  componentDidMount() {
    console.log('SettingsScreen this props', this.props)
  }
  render () {
    return (
      <View>
        <Button
          title='Account'
          onPress={() => this.props.navigation.navigate('Account')}
        />
      </View>
    )
  }
}

export default SettingsScreen