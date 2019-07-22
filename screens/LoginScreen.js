import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native'
import {connect} from 'react-redux'

import * as actions from '../state/auth/actions'

class LoginScreen extends React.Component {
  state = {
    email: 'albert@mail.com',
    password: '123456'
  }

  componentDidMount() {
  }

  async handleRailsLogin() {
    this.props.railsLogin(this.state.email, this.state.password)

    if (this.props.auth.accessToken) {
      this.props.navigation.navigate('Plank')
    }
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
          onPress={() => this.handleRailsLogin()}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {auth: state.auth }
}

export default connect(mapStateToProps, actions)(LoginScreen)
