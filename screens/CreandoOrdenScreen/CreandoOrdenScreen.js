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

    useEffect(() => {
        console.warn('use effct is callef')
        if (originPlace&&ubicacion){
            
        }
    }, [originPlace,ubicacion])



    return(
        <View style={styles.container}>
            <View style={styles.subcontainer1}>
                <View style={styles.ubicacion_container}>
                    <Text style={styles.textentregar}>
                    <Entypo name="location-pin" size={33} color={Colors.dark.tint}/>
                        Entregar en
                    </Text>
                    <Text style={styles.textUbicacionActual}>{ubicacion}</Text>
                </View>
                <View style={styles.autocomplete}>

                        <GooglePlacesAutocomplete
                            placeholder='Buscar tu ubicación'
                            onPress={(data, details = null) => {
                            setOriginPlace({data,details});
                            setUbicacion(data.description)
                            }}
                            onFail={(error) => console.error(error)}
                            styles={{
                            TextInput:styles.textInput,
                            container:{
                            position:'absolute',
                            top: 10,
                            left:10,
                            right:10,
                            },
                            listView:{
                            position:'absolute',
                            top:50,
                            }
                            }}
                            fetchDetails
                            query={{
                            key: 'AIzaSyDgJ1FeKhUsM-oYr1s6yoQrCdqCEw-PhiM',
                            language: 'es',
                            components: 'country:mx',
                            }}
                            />
                        </View> 
                </View>
        <View style={styles.subcontainer2}>
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