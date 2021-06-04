import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import SearchBarComponent from '../../components/searchbar/SearchBar'
import Banner from '../../components/Banner/Banner'
import styles from './styles'
import Products from '../../components/Products/Products'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingScreen from '../shoppingscreen/ShoppingScreen'

const Stack = createStackNavigator();

export default function HomeScreen2({route, navigation}) {
  
  console.log(route)
  const {ubicacion} = route.params;
  console.log(ubicacion)
 
  return (
    <SafeAreaView style={styles.container}>
        <View>
        <TouchableOpacity>
          <View style={styles.subcontainer1}>
          <Text style={styles.ubicacion} numberOfLines={1}>{ubicacion}</Text>
          <MaterialIcons name="arrow-right" size={30} color="black" />
          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.subcontainer2}>
          <SearchBarComponent/>
        </View>
        
        <View style={styles.subcontainer3}>
            <Banner/>
        </View>
        
        <View style={styles.subcontainer4}>
          <Products/>
        </View>
    
    </SafeAreaView>
  );
}

