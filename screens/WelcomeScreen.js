import React from 'react'
import {
  Button,
  View,
  Text,
  StyleSheet
} from 'react-native'
import {connect} from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class WelcomeScreen extends React.Component {
  renderActionBtn() {
    const accessToken = this.props.auth.accessToken

    if (accessToken) {
      return (
        <Button 
          title='Plank area'
          onPress={() => this.props.navigation.navigate('Plank')}
        />
      )
    } else {
      return (
        <View>
          <Button 
            title='Sign in'
            onPress={() => this.props.navigation.navigate('Login')}
          />
          <Button 
            title='Sign up'
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome screeeen</Text>
        <Text>{this.props.auth.email}</Text>
        {this.renderActionBtn()}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(WelcomeScreen)
