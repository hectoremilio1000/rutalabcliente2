import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: 'https://imagenesrutalab.s3.amazonaws.com/images/banner/banner_nuevo.jpg' };
const Banner = ()=> {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>20% OFF PRUEBA COVID</Text>
      <ImageBackground source={image} style={styles.image}>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'90%',
    height:200,
    borderRadius:20,
    marginVertical:10,
    overflow: 'hidden',
    borderRadius:10,
    backgroundColor:'white'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius:5,
  },
  text: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    opacity: 1,
    textAlign:'center'
  },
});

export default Banner