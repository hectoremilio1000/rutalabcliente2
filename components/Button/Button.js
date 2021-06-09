import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'



const Button = ({ text, onPress, containerStyles }) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    marginVertical: 10,
    width:200,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a15e1b',
  },
  text: {
    fontSize: 16,
    color:'white',
    padding:5,
  },
})

export default Button;