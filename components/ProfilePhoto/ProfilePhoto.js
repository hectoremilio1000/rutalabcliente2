import React from 'react'
import {Image} from 'react-native'


const ProfilePhoto = ({image, size = 70})=>{
    return (
    <Image 
        source ={{uri:image}} 
        style={{
            width:size, 
            height: size, 
            borderRadius:size
        }}
        />
        )
        }
        

export default ProfilePhoto