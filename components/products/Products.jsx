import React from "react";
import {View, Text, Pressable} from 'react-native'
import ProductImage from './productImage/ProductImage'
import styles from './styles'
import { useNavigation } from "@react-navigation/native";

const Product = ({item}) => {
    const navigation = useNavigation();
    
const onPress = ()=>{
    navigation.navigate('ServiceDetails', {id:item.id})
}

    return(
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.subcontainer1}>
                <ProductImage image={item.image}/>
            </View>
            <View style={styles.subcontainer2}>
                <Text style={styles.text1}>{item.title}</Text>
                <Text style={styles.text2}>Tiempo de resultado {item.tiempoResultado} min</Text>
                <Text>${item.precio}</Text>
            </View>
        </Pressable>
    )
}

export default Product