import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen';
import ActiveGpsScreen from '../Screens/ActiveGpsScreen';
import LoadingScreen from '../Screens/LoadingScreen';
import { ActiveGpsContext } from '../context/ActiveGps/ActiveGpsContext';

const Stack = createStackNavigator();

const StackNavigator = () => {

  const { locationStatus } = useContext(ActiveGpsContext);

  if(locationStatus === 'unavailable') return <LoadingScreen />
  
  return (
    <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
            cardStyle:{
                backgroundColor:'white'
            }
        }}
    >
      {
        (locationStatus === 'granted')
          ? <Stack.Screen name="HomeScreen" options={{title:'Inicio'}} component={ HomeScreen } />
          : <Stack.Screen name="ActiveGpsScreen" component={ ActiveGpsScreen } />
      }
    </Stack.Navigator>
  );
}

export default StackNavigator;