
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';  

const Volume = () => {
  const [selectedVolume, setSelectedVolume] = useState(null);
  const navigation = useNavigation();  

  const VolumeOptions = [
    { label: 'Ate 1kg', icon: 'Weight' },
    { label: 'Até 5 kg', icon: 'Weight'},
    { label: 'Até 10 kg', icon: 'Weight' },
    { label: 'Até 20 kg', icon: 'Weight' },
    { label: 'Outro', icon: 'Weight' },
  ];

  const saveVolume = () => {
    console.log(`Volume selecionado: ${selectedVolume}`)
    navigation.navigate('Preco'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual será o peso da sua Encomenda?</Text>
      <ScrollView style={styles.scrollView}>
        <RadioButton.Group onValueChange={(newValue) => setSelectedVolume(newValue)} value={selectedVolume}>
          {VolumeOptions.map((option, index) => (
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
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={saveVolume}>
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
  scrollView: {
    flex: 1,
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
    marginBottom: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Volume;
