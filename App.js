import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native'; // Certifique-se de incluir 'StyleSheet'

import RoutesTab from './src/Routes/RoutesTab.js';

export default function App() {
   return (
     <View style={styles.container}>
       <NavigationContainer>
         <RoutesTab />
       </NavigationContainer>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#FFFFFF', // Sua cor de fundo desejada
   },
 });



