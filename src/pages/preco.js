import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';

const Preco = ({ navigation }) => {
  const [preco, setPreco] = useState(100);
  const [precoManual, setPrecoManual] = useState(`${preco.toFixed(2)}`);

  const handlePrecoChange = (valor) => {
    setPreco(valor);
    setPrecoManual(`${valor.toFixed(2)}`);
  };

  const handlePrecoManualChange = (text) => {
    const parsedValue = parseFloat(text.replace(',', '.'));
    setPrecoManual(text);
    if (!isNaN(parsedValue)) {
      setPreco(parsedValue);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="black" />

      <View style={{ height: 120, width: '100%', backgroundColor: 'black' }}>
        <View style={styles.barContainer}>
          <TouchableOpacity
            style={styles.antButton}
            onPress={() => navigation.navigate('Send')}
          >
            <Icon name="arrow-left" size={16} color="#fff" />
          </TouchableOpacity>

          <Text style={{ color: '#fff' }}>Ser um Muvver</Text>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.navigate('Inicio')}
          >
            <Text style={{ color: '#fff' }}>Cancelar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ color: '#fff', fontSize: 20, marginLeft: 12, marginTop: -50, padding: 10 }}>
            Definir preço mínimo do deslocamento?
          </Text>
        </View>
      </View>

      <View style={styles.containerPreco}>
        <Text style={styles.title}>Preço de entrega</Text>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#2222228A', fontSize: 11 }}>Valor sugerido</Text>
          <Slider
            style={{ width: '100%' }}
            minimumValue={0}
            maximumValue={2000}
            value={preco} 
            onValueChange={handlePrecoChange}
            step={1}
            maximumTrackTintColor={'#2222228A'}
            color={'black'}
          />
          <TextInput
            style={{ height: 40, borderColor: 'transparent', borderWidth: 1, marginTop: 10, textAlign: 'center' }}
            keyboardType="numeric"
            onChangeText={handlePrecoManualChange}
            value={precoManual}
          />
          <Text style={{ color: '#2222228A', fontSize: 11 }}>Clique no valor acima para um preço mais específico.</Text>
        </View>

        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('State')}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerPreco: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
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
  antButton: {
    marginRight: 20,
  },
  barContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 90,
    backgroundColor: "black",
  },
});

export default Preco;
