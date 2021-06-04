import React from 'react'
import {Image} from 'react-native'
import styles from './styles'



const ProductImage = (props) =>{
    const {image} = props

    return(<Image source={{uri:image}}
        style={styles.image}
        />
    )
}

export default ProductImage