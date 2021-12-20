import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ApiRenderScreen from '../Screens/ApiRenderScreen';
import StackNavigator from './StackNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
        initialRouteName='HomeScreen'
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarStyle: { 
                position: 'absolute',
                borderTopColor: 'black',
                backgroundColor:' rgba(255,255,255,0.7)',
                borderTopWidth: 1.5,
                elevation: 0,
                height: 80
            },
            tabBarLabelStyle:{
                fontSize: 18,
                marginBottom: 10
            },
        }}
        
    >
    <Tab.Screen 
        name="StackNavigator" 
        options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({color}) => (
                <Icon name='navigate' color={color} size={35} />
            )
        }}  
        component={StackNavigator} 
    />
    <Tab.Screen 
        name="ApiRenderScreen" 
        options={{
            tabBarLabel: 'Listado',
            tabBarIcon: ({color}) => (
                <Icon name='list' color={color} size={35} />
            )
        }} 
        component={ApiRenderScreen} />
    </Tab.Navigator>
  );
}

export default TabsNavigator;