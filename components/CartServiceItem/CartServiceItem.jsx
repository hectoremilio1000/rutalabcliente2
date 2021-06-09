import React from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native'
import ProductImage from './productImage/ProductImage'
import styles from './styles'



const CartServiceItem = ({cartItem}) => {

    const { quantity, item} = cartItem

    const onPressResultados= ()=>{
        console.warn('ver resultados')
    }

    return(
    <View style={styles.subcontainer2_1}>
        <Image 
            source={{uri:item.image}}
            style={styles.imageproducto}/>
        <View style={styles.subcontainer2_1_1}>
            <Text style={styles.prueba}>({cartItem.cantidad}) {item.title}</Text>
            <Text style={styles.precio}>${item.precio}</Text> 
            <Text style={styles.fecha}>{item.fecha}</Text>  
            <Text style={styles.proceso}>{item.status}</Text>
            <TouchableOpacity onPress={onPressResultados}>
            <Text style={styles.resultados}>Ver resultados</Text>
            </TouchableOpacity>
        </View>
        
    </View>
    )
}

export default CartServiceItem