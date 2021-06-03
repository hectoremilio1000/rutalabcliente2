/*This is an Example of SearchBar in React Native*/
import React from 'react';
import {
  TextInput,
  View,
} from 'react-native';
import styles from './styles'


const SearchBarComponent = (props)=>{
    return (
      //ListView to show with textinput used as search bar
    <View style={styles.viewStyle}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          placeholder="Buscar servicios"
          style={styles.textStyle}
        />
    </View>
    )
  
}



export default SearchBarComponent