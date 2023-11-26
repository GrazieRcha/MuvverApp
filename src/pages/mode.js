import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Mode = () => {
  const [selectedTransport, setSelectedTransport] = useState(null);

  const transportOptions = [
    { label: 'Carro', icon: 'car' },
    { label: 'Avião', icon: 'plane'},
    { label: 'Caminhão', icon: 'truck' },
    { label: 'Van', icon: 'bus' },
    { label: 'Bicicleta', icon: 'bicycle' },
    { label: 'Moto', icon: 'motorcycle' },
    { label: 'Trem', icon: 'train' },
    { label: 'Ônibus', icon: 'bus' }, 
    { label: 'Embarcação', icon: 'ship' },
  ];

  const saveData = () => {
    console.log(`Meio de transporte selecionado: ${selectedTransport}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual será o meio de transporte da sua viagem?</Text>
      <RadioButton.Group onValueChange={(newValue) => setSelectedTransport(newValue)} value={selectedTransport}>
        {transportOptions.map((option, index) => (
          <View key={index} style={styles.transportOption}>
            <Icon name={option.icon} size={30} color="#16A45C" />
            <View style={styles.radioOptionContainer}>
              <RadioButton.Item 
                style={styles.radioOption} 
                label={option.label} 
                value={option.label} 
              />
            </View>
          </View>
        ))}
      </RadioButton.Group>
      <TouchableOpacity style={styles.button} onPress={saveData}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  transportOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    marginVertical: 5,
  },
 
  radioOptionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  radioOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    padding: 10,
    backgroundColor: '#16A45C',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Mode;
