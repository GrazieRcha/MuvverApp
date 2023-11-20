import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import Routes from './src/Routes/index.js';
import RoutesTab from './src/Routes/RoutesTab.js';
import { DarkTheme } from 'react-native-paper';

export default function App() {
  return (
   <NavigationContainer>
      <StatusBar backgroundColor='#38A66D' barStyle='light-content'/>
      <RoutesTab/>
      {/* <Routes/> */}
   </NavigationContainer>
   
   
   
   
   
   );
}


