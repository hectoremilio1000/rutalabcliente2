import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
      padding: 10,
      backgroundColor: 'white',
      marginTop:40,
    },
  
    subcontainer2:{
    marginTop:20,
    paddingHorizontal:20,
    },
  
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign:'center',
      marginVertical:10,
    },
  
    precio:{
      fontSize: 13,
      fontWeight: 'bold',
      marginVertical:5,
    },
  
    title2:{
      fontSize: 18,
      fontWeight: 'bold',
      textAlign:'center',
    },
  
    description: {
      marginVertical: 10,
      lineHeight: 20,
      marginVertical:2,
    },
    subcontainerbutton:{
      alignSelf:'center'
    },
  
    button:{
      backgroundColor:'#022180',
      borderRadius:5,
      width:250,
      height:40,
      justifyContent:'center',
      alignItems:'center',
      marginTop:'3%',
      marginBottom:'3%',
  },
  textButton:{
      color:'white',
  }
  });


export default styles