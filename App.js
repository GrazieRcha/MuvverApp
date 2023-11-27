import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';

import RoutesTab from './src/Routes/RoutesTab.js';
import Send from './src/pages/send.js';
import Mode from './src/pages/mode.js';
import Mapa from './src/pages/mapa.js';

const Stack = createNativeStackNavigator();

export default function App() {
   return (
     <View style={styles.container}>
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={RoutesTab} options={{ headerShown: false }}
          />
          <Stack.Screen
          
            name="Send"
            component={Send}
          />
           <Stack.Screen
          
          name="Mode"
          component={Mode} 
        />
        <Stack.Screen
          
          name="Mapa"
          component={Mapa} 
        />
        </Stack.Navigator>

       </NavigationContainer>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'white', // Sua cor de fundo desejada
   },
 });



