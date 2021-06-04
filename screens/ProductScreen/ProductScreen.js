import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import product from '../../assets/data/product'
import styles from './styles'


export default function ProductScreen() {

    const onPressLearnMore = ()=>{
        return(
            console.warn("agregar")
    )}

    return (
        <SafeAreaView style={styles.root}>
            <Image source={{uri:product.image}}
        style={styles.image}
        />
        <View style={styles.subcontainer2}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.tiempoResultado}>Tiempo de resultado {product.tiempoResultado}min</Text>
                <Text style={styles.precio}>Precio ${product.precio}</Text>
                <Text style={styles.title2}>¿Qué es?</Text>
                <Text style={styles.description}>{product.descripcion}</Text>
                <View style={styles.subcontainerbutton}>
                    <TouchableOpacity
                    onPress={onPressLearnMore}
                    style={styles.button}>
                        <Text style={styles.textButton}>Agregar
                        </Text>
                    </TouchableOpacity>
                </View>
        </View>
        </SafeAreaView>
    )
}
