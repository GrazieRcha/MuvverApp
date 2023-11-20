import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Inicio from '../pages/inicio.js';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="inicio" component={Inicio}  options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}