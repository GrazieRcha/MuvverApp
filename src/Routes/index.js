import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import people from '../pages/people';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="people" component={people}  options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}