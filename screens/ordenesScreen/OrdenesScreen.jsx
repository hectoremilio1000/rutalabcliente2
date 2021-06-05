import React from 'react'
import {Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons';


import Colors from '../../constants/Colors'
import styles from './styles'
import order from '../../assets/data/order'

const OrdenesScreen = ()=>{

    const onPressLista = ()=>{
        console.warn('lista de ordenes')
    }

    const onPressResultados= ()=>{
        console.warn('ver resultados')
    }

    const onPressLogOut= ()=>{
        console.warn('cancelar')
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.subcontainer1}>
                <Text style={styles.textpropina}>Órdenes anteriores</Text>
                <TouchableOpacity onPress={onPressLista}>
                    <View style={styles.sucontainer1_1}>
                        <AntDesign name="right" size={14} color={Colors.dark.tint}/>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.subcontainer2}>
                <Text style={styles.textcurso}>Orden en curso</Text>
                <View style={styles.subcontainer2_1}>
                <Image 
                    source={{uri:order.image}}
                    style={styles.imageproducto}/>
                    <View style={styles.subcontainer2_1_1}>
                    <Text style={styles.prueba}>{order.title}</Text>  
                    <Text style={styles.fecha}>{order.fecha}</Text>  
                    <Text style={styles.proceso}>{order.status}</Text>
                    <TouchableOpacity onPress={onPressResultados}>
                        <Text style={styles.resultados}>Ver resultados</Text>
                    </TouchableOpacity>
                    </View>

            </View>
                
                </View>

            <View style={styles.subcontainer3}> 
                    <View style={styles.subcontainer4}>
                        <TouchableOpacity onPress={onPressLogOut} style={styles.button}>
                            <Text style={styles.textButton}>Cancelar pedido</Text>
                        </TouchableOpacity>
                    </View> 
                </View>          

        </SafeAreaView>
    )
}

export default OrdenesScreen