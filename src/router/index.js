/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Splash, ListJersey, Profile, JerseyDetail} from '../pages/';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}/>
      <Tab.Screen
        name="ListJersey"
        component={ListJersey}
        options={{title: 'Jersey', headerShown: false}} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}} />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="JerseyDetail"
        component={JerseyDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
