import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const State = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../img/viaumm.png')} style={styles.image} />
      <Text style={styles.title}>Viagem Criada</Text>

      <Text style={styles.subtitle}>
        Vamos ver os volumes já disponíveis para a sua viagem.
      </Text>

      <Text style={styles.disclaimer}>
        Ao prosseguir, você declara para efeitos legais, administrativos, jurídicos e demais aplicáveis, a veracidade de todas as informações prestadas antes, durante e após qualquer uma das etapas do app.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Inicio')}
        style={styles.button}>
        <Text style={{color:'#fff'}}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 32,
    marginTop: 30,
    marginBottom: 30,
    color: '#222222',
  },
  subtitle: {
    fontSize: 14,
    color: '#222222',
  },
  disclaimer: {
    fontSize: 12,
    color: '#2222228A',
    textAlign: "center",
    paddingTop: 20,
  },
  button: {
    width:"70%",
    top: 40,
    backgroundColor: '#16A45C',
    padding: 10,
    alignItems:"center",
    borderRadius: 5,

  },
});

export default State;
