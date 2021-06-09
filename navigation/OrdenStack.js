import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import OrdenesScreen from '../screens/OrdenesScreen/OrdenesScreen'
import ProductScreen from '../screens/ProductScreen/ProductScreen'
import DestinationSearchScreen from '../screens/DestinationScreen/DestinationScreen'
import CreandoOrdenScreen from '../screens/CreandoOrdenScreen/CreandoOrdenScreen'

const Stack1 = createStackNavigator();

export default function OrdenStack() {
    return (
        <Stack1.Navigator>
            <Stack1.Screen
            name="Orden"
            component={OrdenesScreen}
            options={{
            title:'Tu orden'
            }}/>
            <Stack1.Screen
            name="Destination"
            component={DestinationSearchScreen}
            options={{
            title:'Escoge tu ubicación'
            }}/>
            <Stack1.Screen
            name="CreandoOrden"
            component={CreandoOrdenScreen}
            options={{
            title:'Creando orden'
            }}/>
        </Stack1.Navigator>
    )
}
