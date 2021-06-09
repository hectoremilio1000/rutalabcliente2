import React, {useState, useEffect} from 'react'
import {View, TextInput,SafeAreaView, Text} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Constants } from 'expo';

import styles from './styles'


const DestinationSearch = ({navigation})=>{
    const [originPlace, setOriginPlace] = useState(null)
    const [ubicacion, setUbicacion] = useState(null)

    useEffect(() => {
        console.warn('use effct is callef')
        if (originPlace&&ubicacion){
            
        }
    }, [originPlace,ubicacion])

    return(
        <View>
            <View style={styles.ubicacion_container}>
                <Text style={styles.textUbicacionActual}>{ubicacion}</Text>
            </View>
            <View style={styles.autcomplete}>

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
                        top: 50,
                        left:10,
                        right:10,
                    },
                    listView:{
                        position:'absolute',
                        top:200,
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
    )
}

export default DestinationSearch