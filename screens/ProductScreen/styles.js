import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  image:{
    width:'100%',
    height:250,
    borderRadius:10,
    marginTop:20,
    resizeMode:'cover',
},
  subcontainer2:{
  marginTop:20,
  paddingHorizontal:20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  tiempoResultado:{
    fontSize: 13,
    fontWeight: 'bold',
    marginVertical:5,
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
  },
  subcontainerbutton:{
    alignSelf:'center'
  },

  button:{
    backgroundColor:'#022180',
    borderRadius:5,
    width:100,
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

export default styles;