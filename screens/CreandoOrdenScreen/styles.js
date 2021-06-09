import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex:1,
        padding:10,
    },
    subcontainer1:{
        marginTop:10,
        marginHorizontal:10,
        padding: 10,
        borderRadius:10,
        backgroundColor:'white',
        height:'67%',
    },
    ubicacion_container:{
        justifyContent:'space-between',
        paddingBottom:18,
        borderBottomWidth:1,
        borderBottomColor:'#969696',
        marginHorizontal:10,
    },
    textentregar:{
        fontSize:17,
    },

    textUbicacionActual:{
        paddingTop:10,
        color:'black',
        fontSize:12,
    },
    autocomplete:{
        backgroundColor:'red',
        height:'0%'
        },

        textInput:{
            marginHorizontal:20,
            backgroundColor:'#D3D3D3',
            borderRadius:40,
            height:40,
            paddingLeft:10,
            marginVertical:20,
        },



    textNombre:{
        marginTop:40,
        fontSize:17,
        marginVertical:20,
        marginHorizontal:20,
    },
    textProductName:{
        fontSize:19,
        marginVertical:20,
        marginHorizontal:20,
    },
    textMetodoPago:{
        fontSize:19,
        marginVertical:20,
        marginHorizontal:20,
    },

    button:{
        backgroundColor:'#022180',
        borderRadius:5,
        width:200,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'3%'
    },
    textButton:{
        color:'white',
        fontSize:16,
    }
})

export default styles
