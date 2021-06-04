import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import ProductImage from './productImage/ProductImage'
import styles from './styles'

const Product = ({item}) => {
    
   const onPressLearnMore = ()=>{
        return(
            console.warn("agregar")
    )}

    return(
        <View style={styles.container}>
            <View style={styles.subcontainer1}>
                <ProductImage image={item.image}/>
            </View>
            <View style={styles.subcontainer2}>
                <Text style={styles.text1}>{item.title}</Text>
                <Text style={styles.text2}>Tiempo de resultado {item.tiempoResultado} min</Text>
                <Text>${item.precio}</Text>
                <TouchableOpacity
                onPress={onPressLearnMore}
                style={styles.button}>
                    <Text style={styles.textButton}>Agregar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product