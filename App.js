import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View
} from 'react-native'
import { Provider } from 'react-redux'
import { 
  createStackNavigator, 
  createAppContainer, 
  createBottomTabNavigator 
} from 'react-navigation'

import { persistor, store } from './store'

import SelectVideoScreen from './screens/SelectVideoScreen'
import ResultsScreen from './screens/ResultsScreen'
import TrainScreen from './screens/TrainScreen'
import { PersistGate } from 'redux-persist/integration/react'

const AppNavigator = createBottomTabNavigator({
  SelectVideoScreen: SelectVideoScreen,
  Results: ResultsScreen,
  Train: TrainScreen
})

const AppContainer = createAppContainer(AppNavigator);

const LoadingView = () => <Text>Loading</Text>

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
