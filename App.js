import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

import ActiveGpsProvider from './src/context/ActiveGps/ActiveGpsState';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <ActiveGpsProvider>
          <StackNavigator />
        </ActiveGpsProvider>
      </NavigationContainer>
    </>
  )
}

export default App
