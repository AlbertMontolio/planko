import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { connect } from 'react-redux'

import {railsLogout as railsLogoutAction} from '../state/auth/actions'

class AccountScreen extends React.Component {
  async handleLogout() {
    await this.props.railsLogout(this.props.auth)
    this.props.navigation.navigate('Welcome')
  }

  handleGoToWelcome() {
    this.props.navigation.navigate('Welcome')
  }

  render () {
    return (
      <View>
        <Text>Account</Text>
        <Button 
          title='Log out'
          onPress={() => this.handleLogout()}
        />
        <Button 
          title='Go To Welcome'
          onPress={() => this.handleGoToWelcome()}
        />
      </View>
    )
  }
}

export default connect(null, {
  railsLogout: railsLogoutAction
})(AccountScreen)