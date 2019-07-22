import React from 'react'
import {
  Button,
  View,
  Text,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class WelcomeScreen extends React.Component {
  componentDidMount() {
    // const accessToken = await AsyncStorage.getItem('accessToken')
    const accessToken = null

    if (accessToken) {
      // this.props.navigation.navigate('Plank')
    } else {
      // this.props.navigation.navigate('Login')
    }
  }

  renderActionBtn() {
    const accessToken = null

    if (accessToken) {
      return (
        <Button 
          title='Plank area'
          onPress={() => this.props.navigation.navigate('Plank')}
        />
      )
    } else {
      return (
        <Button 
          title='Login'
          onPress={() => this.props.navigation.navigate('Login')}
        />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome screeeen</Text>
        {this.renderActionBtn()}
        <Button 
          title='Sign up'
          onPress={() => alert('button sign up pressed')}
        />
      </View>
    )
  }
}

export default WelcomeScreen