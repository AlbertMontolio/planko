import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

class SettingsScreen extends React.Component {
  render () {
    return (
      <View>
        <Text>Settings</Text>
        <Button
          title='Account'
          onPress={() => this.props.navigation.navigate('AccountScreen')}
        />
      </View>
    )
  }
}

export default SettingsScreen