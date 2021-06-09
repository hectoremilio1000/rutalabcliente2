import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
    autOcomplete:{
    marginBottom:60,
    backgroundColor:'#eee',
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

    ubicacion_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#969696',
        marginHorizontal:20,
    },
    ubicacion_actual:{
        width:'60%',
        marginVertical:20,
        
    },
    button:{
        width:130,
        height:50,
        borderRadius:50,
        backgroundColor:'#022180',
        justifyContent:'center',
        marginTop:20,
    },
    textRecurrente:{
    fontWeight:'bold',
    fontSize:16
    },

    textActualizar:{
        color:'#fff',
        textAlign:'center',
        fontSize:15,
    },

    textUbicacionActual1:{
        paddingBottom:10,
    },
    textUbicacionActual2:{
        paddingBottom:0,
    },

    containerNuevaDireccion:{
        marginHorizontal:20,
        marginTop:20,
    },
    subcontainerNuevaDireccion:{
        width:'60%',
        
    },

    textNuevaDireccion:{
        fontWeight:'bold',
        fontSize:16,
        marginBottom:10,
    },
})

export default styles
