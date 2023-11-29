import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const Preco = ({ navigation }) => {
  const [preco, setPreco] = useState(10);

  const handlePrecoChange = (valor) => {
    setPreco(valor);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Definir preço mínimo do deslocamento</Text>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Preço: R${preco.toFixed(2)}</Text>

        <Slider
          style={{ width: '90%', marginTop: 10, color:'black' }}
          minimumValue={0}
          maximumValue={100}
          value={preco}
          onValueChange={handlePrecoChange}
          step={1}
        />
      </View>

      <TouchableOpacity style={styles.button} 
      onPress={() => navigation.navigate('State')}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#16A45C',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Preco;
