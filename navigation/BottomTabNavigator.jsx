import { Ionicons, FontAwesome, Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';

import HomeScreen from '../screens/homescreen/HomeScreen'
import HomeScreen2 from '../screens/homescreen2/HomeScreen2'
import ProductScreen from '../screens/ProductScreen/ProductScreen'
import ShoppingScreen from '../screens/shoppingscreen/ShoppingScreen'
import OrdenesScreen from '../screens/ordenesScreen/OrdenesScreen'
import HelpScreen from '../screens/helpScreen/HelpScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import DestinationSearchScreen from '../screens/destinationScreen/DestinationScreen'

const Tab = createBottomTabNavigator();

function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default function BottomTabNavigator() {
  

  return (
    
    <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#022180',
          inactiveTintColor: 'gray',
        }}
      >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-home" color={color}/>,
        }}
      />
      <Tab.Screen
        name="Compras"
        component={ProductScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="shopping-outline" size={30} color={color} />
        }}
      />
      <Tab.Screen
        name="Ordenes"
        component={OrdenesScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="list-alt" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="support-agent" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="tag-faces" size={28} color={color} />,
        }}
      />
      </Tab.Navigator>
    
  );
}

const TabOneStack = createStackNavigator();

function HomeNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Inicio"
        component={HomeScreen}
      />
      <TabOneStack.Screen
        name="Destination"
        component={DestinationSearchScreen}
      />
      <TabOneStack.Screen
        name="InicioDireccion"
        component={HomeScreen2}
      />
    </TabOneStack.Navigator>
  );
}