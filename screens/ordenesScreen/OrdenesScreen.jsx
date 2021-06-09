import React from 'react'
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native'
import Button from '../../components/Button/Button'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import CartServiceItem from '../../components/CartServiceItem/CartServiceItem';
import { FlatList } from 'react-native-gesture-handler';

import orders from '../../assets/data/order'

const OrdenesScreen = ()=>{
const navigation = useNavigation();

    const totalPrice = orders.reduce(
        (summedPrice, order) =>
          summedPrice + order.item.precio * order.cantidad,
        0,
      );

    const onCheckout= ()=>{
        navigation.navigate('Destination')
    }

    return(
        <View style={styles.page}>
            
            <FlatList
                data={orders}
                renderItem={({item})=><CartServiceItem cartItem={item}/>}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    ()=>(
                    <View style={styles.container}>
                        <View style={styles.subcontainer2}>
                            <View>
                                <Text style={styles.textcurso}>Orden en curso</Text>
                                <Text style={styles.textcurso1}>Estudios solicitados</Text>
                                <View style={styles.subcontainer3}> 
                                    <Text style={{fontSize: 18}}>
                                    Subtotal ({orders.length} servicios):{' '}
                                    <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                                    ${totalPrice.toFixed(2)}
                                    </Text>
                                    </Text>
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
                        </View>
                              
                        )
                    }
                />
        

        </View>
    )
}

export default OrdenesScreen