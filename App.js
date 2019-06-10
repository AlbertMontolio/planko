import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import SelectVideoScreen from './screens/SelectVideoScreen'
import ResultsScreen from './screens/ResultsScreen'
import TrainScreen from './screens/TrainScreen'

import { Provider } from 'react-redux'

import { store } from './store'

const AppNavigator = createBottomTabNavigator({
  SelectVideoScreen: SelectVideoScreen,
  Results: ResultsScreen,
  Train: TrainScreen
})

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
