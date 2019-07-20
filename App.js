import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  Button
} from 'react-native'
import { Provider } from 'react-redux'
import { 
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer, 
  createBottomTabNavigator, 
  createSwitchNavigator
} from 'react-navigation'
import Icon from '@expo/vector-icons/Ionicons'

import { persistor, store } from './store'

import SelectVideoScreen from './screens/SelectVideoScreen'
import ResultsScreen from './screens/ResultsScreen'
import ResultsLogScreen from './screens/ResultsLogScreen'
import AddResultsScreen from './screens/AddResultsScreen'
import TrainScreen from './screens/TrainScreen'
import ProfileScreen from './screens/ProfileScreen'
import { PersistGate } from 'redux-persist/integration/react'

// SelectVideoScreen: SelectVideoScreen,

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome screeeen</Text>
        <Button 
          title='Login'
          onPress={() => this.props.navigation.navigate('Plank')}
        />
        <Button 
          title='Sign up'
          onPress={() => alert('button sign up pressed')}
        />
      </View>
    )
  }
}

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate 
          loading={<LoadingView />} 
          persistor= {persistor}
        >
          <AppContainer />
        </PersistGate>
      </Provider>
    )
  }
}

const TrainStack = createStackNavigator({
  Train: {
    screen: TrainScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Training area',
        headerLeft: (
          <Icon style={{paddingLeft: 10}}
            onPress={() => navigation.openDrawer()} 
            name='md-menu' 
            size={30}
          />
        )
      }
    }
  }
})

const AddResultsStack = createStackNavigator({
  AddResultsScreen: {
    screen: AddResultsScreen,
    navigationOptions: ({navigation}) => {
      return {
        header: null
      }
    }
  }
})

const ResultsLogStack = createStackNavigator({
  ResultsLog: {
    screen: ResultsLogScreen,
    navigationOptions: ({navigation}) => {
      return {
        header: null
      }
    }
  },
  AddResultsScreen: {
    screen: AddResultsStack
  }
})

const ResultsStack = createStackNavigator({
  Results: {
    screen: ResultsScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Results',
        headerLeft: (
          <Icon style={{paddingLeft: 10}}
            onPress={() => navigation.openDrawer()} 
            name='md-menu' 
            size={30}
          />
        )
      }
    }
  },
  ResultsLogScreen: {
    screen: ResultsLogStack
  }
})

const PlankTabNavigator = createBottomTabNavigator({
  TrainStack,
  ResultsStack
}, {
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index]
    return {
      header: null,
      headerTitle: routeName
    }
  }
})

const PlankStackNavigator = createStackNavigator({
  PlankTabNavigator: PlankTabNavigator
}, {
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft: (<Icon style={{paddingLeft: 10}}
        onPress={() => navigation.openDrawer()} 
        name='md-menu' 
        size={30} />) 
    }
  }
})

const PlankDrawerNavigator = createDrawerNavigator({
  Plank: {
    screen: PlankStackNavigator
  }
})

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  Plank: {screen: PlankDrawerNavigator}
})

// const AppContainer = createAppContainer(AppNavigator)
const AppContainer = createAppContainer(AppSwitchNavigator)

const LoadingView = () => <Text>Loading</Text>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})