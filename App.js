import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button,
  AsyncStorage
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
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from './store'

import SelectVideoScreen from './screens/SelectVideoScreen'
import ResultsScreen from './screens/ResultsScreen'
import ResultsLogScreen from './screens/ResultsLogScreen'
import AddResultsScreen from './screens/AddResultsScreen'
import TrainScreen from './screens/TrainScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import ProfileScreen from './screens/ProfileScreen'
import WelcomeScreen from './screens/WelcomeScreen'

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

const LoginStack = createStackNavigator({ Login: LoginScreen })
const SignUpStack = createStackNavigator({ SignUp: SignUpScreen })

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  Login: {screen: LoginStack},
  SignUp: {screen: SignUpStack},
  Plank: {screen: PlankDrawerNavigator}
})

// const AppContainer = createAppContainer(AppNavigator)
const AppContainer = createAppContainer(AppSwitchNavigator)

const LoadingView = () => <Text>Loading</Text>
