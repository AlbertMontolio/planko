import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native'

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: ''
  }

  async handleLogin() {
    console.log('state', this.state)
    const rawResponse = await fetch('https://plankorailsfour.herokuapp.com/auth/sign_in', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email, 
        password: this.state.password
      })
    });
    const content = await rawResponse.json();

    console.log('contento', content);
    console.log('navigation', this.props.navigation.navigate('Prank'))
    this.props.navigation.navigate('Prank')
  }

  render () {
    return (
      <View>
        <Text>Sign in</Text>
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          autocomplete={'password'}
        />
        <Button 
          title='Login'
          onPress={() => this.handleLogin()}
        />
      </View>
    )
  }
}