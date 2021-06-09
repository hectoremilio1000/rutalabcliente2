import React, {useState, useEffect} from 'react'
import {View, TextInput,SafeAreaView, Text} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Constants } from 'expo';
import Button from '../../components/Button/Button'

import styles from './styles'

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };


const DestinationSearchScreen = ({navigation})=>{
    const [originPlace, setOriginPlace] = useState(null)
    const [ubicacion, setUbicacion] = useState(null)

    useEffect(() => {
        console.warn('use effct is callef')
        if (originPlace&&ubicacion){
            
        }
    }, [originPlace,ubicacion])

    const onCheckout= ()=>{
        navigation.navigate('Destination')
    }

    return(
        <View>
            <View style={{alignSelf:'center'}}>
                <Button
                text="Iniciar"
                onPress={onCheckout}
                containerStyles={{
                    backgroundColor: '#022180',
                    borderColor: '#c7b702',
                }}
                />
            </View>  
            
            <View style={styles.autOcomplete}>
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
                        top: 20,
                        left:10,
                        right:10,
                    },
                    listView:{
                        position:'absolute',
                        top:250,
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
            <View>
                <View style={styles.ubicacion_container}>
                    <View style={styles.ubicacion_actual}>
                    <Text style={styles.textRecurrente}>Ubicación RUTALAB</Text>
                    <Text style={styles.textUbicacionActual1}>Niños Héroes 710, 
                    Santa María del Marquesado, Niños Heroes, Oax.</Text>
                    <Text style={styles.textRecurrente}>Ubicación actual</Text>
                    <Text style={styles.textUbicacionActual2}>{ubicacion}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DestinationSearchScreen