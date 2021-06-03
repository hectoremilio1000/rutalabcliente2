import React from 'react'
import {Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native'


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
        <SafeAreaView>
            <View >
                <Text>Ordenes screen</Text>
                </View>          

        </SafeAreaView>
    )
}

export default OrdenesScreen