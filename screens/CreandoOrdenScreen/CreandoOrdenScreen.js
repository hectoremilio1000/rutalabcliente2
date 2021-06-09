import React, {useState, useEffect} from 'react'
import {Text, SafeAreaView, View, TouchableOpacity, ScrollView} from 'react-native'
import {Entypo} from '@expo/vector-icons'
import Button from '../../components/Button/Button'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles'
import Colors from '../../constants/Colors'


const CreandoOrdenScreen = ()=>{
    const onCheckout= ()=>{
        console.warn('cancelar')
    }

    const [originPlace, setOriginPlace] = useState(null)
    const [ubicacion, setUbicacion] = useState(null)





    return(
        <View style={styles.container}>
            
        <View style={styles.subcontainer1}>
            <Text style={styles.textNombre}>Tu orden Francisco</Text>
            <Text style={styles.textProductName}>1 Prueba de embarazo</Text>
            <Text style={styles.textMetodoPago}>Método de pago: Tarjeta de débito</Text>

            <View style={styles.subcontainer3}> 
                    <Button
                        text="Comprar"
                        onPress={onCheckout}
                        containerStyles={{
                        backgroundColor: '#022180',
                        borderColor: '#c7b702',
                        }}
                        />
                    </View> 
        </View>

        </View>
    )
}

export default CreandoOrdenScreen