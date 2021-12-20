import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import ActiveGpsProvider from './src/context/ActiveGps/ActiveGpsState';
import TabsNavigator from './src/navigation/TabsNavigator';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <ActiveGpsProvider>
          <TabsNavigator />
        </ActiveGpsProvider>
      </NavigationContainer>
    </>
  )
}

export default App
