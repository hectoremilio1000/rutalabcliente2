import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native'
import NotFoundScreen from '../screens/NotFoundScreen';
import BottomTabNavigator from './BottomTabNavigator';


export default function Navigation() {
    return (
        <NavigationContainer>
             <RootNavigator />
        </NavigationContainer>
    );
  }

  const Route = createStackNavigator();

  function RootNavigator() {
    return (
      <Route.Navigator screenOptions={{ headerShown: false }}>
        <Route.Screen name="Root" component={BottomTabNavigator} />
        <Route.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Route.Navigator>
    );
  }