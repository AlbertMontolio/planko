import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'

import {
  Button
} from 'react-native-elements'

import {connect} from 'react-redux'
import styled from 'styled-components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Planko = styled.Text`
  font-size: 60px;
  font-weight: bold;
  font-family: 'Cochin';
  margin-bottom: 20px;
`

const ActionBtns = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  margin-top: 5opx;
`

const StyledLetsBtn = styled.View`
  margin-top: 40px;
  margin-bottom: 20px;
`

const StyledSentence = styled.Text`
  font-size: 20px;
  text-align: center;
  justify-content: center;
  margin-top: 30px;
  padding: 0px 30px;
`

class WelcomeScreen extends React.Component {
  renderActionBtn() {
    const accessToken = this.props.auth.accessToken

    if (accessToken) {
      return (
        <StyledLetsBtn>
          <Button 
            title="Let's plank"
            type='outline'
            onPress={() => this.props.navigation.navigate('Plank')}
          />
        </StyledLetsBtn>
      )
    } else {
      return (
        <ActionBtns>
          <Button 
            title='Sign in'
            type='outline'
            onPress={() => this.props.navigation.navigate('Login')}
          />
          <Button 
            title='Sign up'
            type='clear'
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </ActionBtns>
      )
    }
  }

  render() {
    const dimensions = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <Planko>PLANKO</Planko>
        <Image 
          source={require('../assets/plank2.jpg')}
          style={{ width: dimensions.width, height: 200 }}
        />
        <StyledSentence>
          Improve your strenght and body health in just 2 minutes.
        </StyledSentence>
        {this.renderActionBtn()}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(WelcomeScreen)
