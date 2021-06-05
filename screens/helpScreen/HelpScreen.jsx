import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import styles from './styles'

export default function HelpScreen() {

  const _handleOpenWithWebBrowser1 = () => {
    WebBrowser.openBrowserAsync('http://api.whatsapp.com/send?phone=525521293811');
  };

    return (
      <SafeAreaView style={styles.root}>
          <Text style={styles.title}>Si tienes alguna duda da click para 
          mandarnos un mensaje</Text>
        {/*<Button
          title="Mándanos Whatsapp"
          onPress={this._handleOpenWithWebBrowser}
          style={styles.button}
        />*/}
        <View style={styles.subcontainerbutton}>
                  <TouchableOpacity
                    onPress={_handleOpenWithWebBrowser1}
                    style={styles.button}>
                        <Text style={styles.textButton}>Mandar mensaje de Whatsapp
                        </Text>
                    </TouchableOpacity>
        </View>

        <Text style={styles.text}>Preguntas frecuentes</Text>
        <Text style={styles.title}>Qué es RUTALAB</Text>
        <Text style={styles.tiempoResultado}>Es la app que te permite realizar tus 
        estudios de laboratorio en donde te encuentres con seguimiento en 
        tiempo real.</Text>
        <Text style={styles.title}>¿Cómo funciona Rutalab?</Text>
        <Text style={styles.tiempoResultado}>Selecciona el estudio que 
        deseas, confirma tu ubicación y un laboratorista llegará a 
        tomar tu muestra, una vez concluya la prueba, podrás consultar el 
        resultado certificado.</Text>
        <Text style={styles.title}>¿Cuáles son las pruebas disponibles?</Text>
        <Text style={styles.tiempoResultado}>Prueba de COVID, Biometría hemática,
        Prueba de embarazo, química sanguínea, Química Sanguínea + Colesterol y trigliceridos y
        Prueba de Orina</Text>
      </SafeAreaView>
    );
  }