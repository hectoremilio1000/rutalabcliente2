import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    
    subcontainer2_1:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        marginVertical:10,
        flex:1,
        backgroundColor:'white',
        borderRadius:10,
    },
    subcontainer2_1_1:{
        height:'100%',
        alignItems:'center',
        flex:1
    },
    prueba:{
        fontSize:20,
        marginVertical:5,
        fontWeight:'bold'
    },
    precio:{
        fontSize:15,
        marginVertical:5,
    },

    fecha:{
        fontSize:15,
        marginVertical:5,
    },
    proceso:{
        fontSize:15,
        marginVertical:5,
    },
    resultados:{
        fontSize:15,
        marginVertical:5,
    },
    subcontainer3:{
        width:'100%',
        position:'absolute',
        bottom:0,
        marginBottom:36,
        alignItems:'center',
    },
    subcontainer4:{

    },

    imageproducto:{
        width:150,
        height:120,
        borderRadius:10,
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