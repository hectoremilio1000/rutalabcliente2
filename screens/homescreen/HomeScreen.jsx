import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native'
import Banner from '../../components/Banner/Banner'
import styles from './styles'
import Products from '../../components/Products/Products'
import { createStackNavigator } from '@react-navigation/stack';

import products from '../../assets/data/products'

const Stack = createStackNavigator();

export default function HomeScreen() {

  return (
    <View style={styles.container}>
        <View style={styles.subcontainer1}>
          <Text style={styles.textTest}>Hola Juan, solicita tu TEST</Text>
        </View>
        <View style={styles.subcontainer3}>
            <Banner/>
        </View>
        <View style={styles.page}>
        <FlatList
        data={products}
        renderItem={({item}) => <Products item={item} key={item.id}/>}
        showsVerticalScrollIndicator={false}
      />
      </View>
    </View>
  );
}

