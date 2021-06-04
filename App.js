import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NotFoundScreen from './screens/NotFoundScreen.jsx'
import Navigation from './navigation/Navigation'

export default function App() {
  return (
    <SafeAreaProvider>
      {<Navigation/>}
      
    </SafeAreaProvider>
  );
}