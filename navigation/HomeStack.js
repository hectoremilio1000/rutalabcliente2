import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/homescreen/HomeScreen'
import ProductScreen from '../screens/ProductScreen/ProductScreen'

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{
            title:'Inicio'
            }}/>
            <Stack.Screen
            name="ServiceDetails"
            component={ProductScreen}
            options={{
            title:'Servicio'
            }}/>
        </Stack.Navigator>
    )
}
