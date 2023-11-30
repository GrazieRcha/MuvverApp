import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: 'URL_DA_SUA_IMAGEM'}} style={styles.image}>
        <Text style={styles.text}>Vamos ver os volumes disponíveis para sua viagem.</Text>
        <TouchableOpacity title="Visualizar volumes" onPress={() => {}} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontSize: 20,
    padding: 20,
    textAlign: "center",
   
  }
});
