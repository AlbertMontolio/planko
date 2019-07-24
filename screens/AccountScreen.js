import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import {
  Button
} from 'react-native-elements'
import styled from 'styled-components'


import {railsLogout as railsLogoutAction} from '../state/auth/actions'
import {
  deleteAllTrains as deleteAllTrainsAction,
  emptyAllMobileTrains as emptyAllMobileTrainsAction
} from '../state/trains/actions'

const DeleteMyAllBtn = styled.View`
  margin-top: 80px;
`

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
        <DeleteMyAllBtn>
          <Button
            title='Delete all'
            type='outline'
            onPress={() => this.props.deleteAllTrains(this.props.auth.id)}
          />
        </DeleteMyAllBtn>
        <DeleteMyAllBtn>
          <Button
            title='Clear data in this devicee'
            type='outline'
            onPress={() => this.props.emptyAllMobileTrains()}
          />
        </DeleteMyAllBtn>
      </View>
    )
  }
}

export default connect(null, {
  railsLogout: railsLogoutAction,
  deleteAllTrains: deleteAllTrainsAction,
  emptyAllMobileTrains: emptyAllMobileTrainsAction
})(AccountScreen)