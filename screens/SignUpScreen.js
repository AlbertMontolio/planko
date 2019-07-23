import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native'
import {connect} from 'react-redux'

import * as actions from '../state/auth/actions'

class SignUpScreen extends React.Component {
  state = {
    email: 'albert@mail.com',
    password: '123456',
    confirmedPassword: '123456'
  }

  componentDidMount() {}

  async handleRailsSignUp() {
    await this.props.railsLogin(
      this.state.email, 
      this.state.password,
      'sign-up'
    )

    if (this.props.auth.accessToken) {
      this.props.navigation.navigate('Plank')
    }
  }

  render () {
    return (
      <View>
        <Text>Sign up</Text>
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
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(confirmedPassword) => this.setState({confirmedPassword})}
          value={this.state.confirmedPassword}
          autocomplete={'password'}
        />
        <Button 
          title='Sign up'
          onPress={() => this.handleRailsSignUp()}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {auth: state.auth }
}

export default connect(mapStateToProps, actions)(SignUpScreen)
