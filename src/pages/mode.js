import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Mode = () => {
  const [selectedTransport, setSelectedTransport] = useState(null);
  const navigation = useNavigation();

  const transportOptions = [
    { label: 'Carro', icon: 'car' },
    { label: 'Avião', icon: 'plane' },
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
    navigation.navigate('Rotas');
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
            <Text style={{color:'#fff', fontSize:20, marginLeft:20, padding:10}}>
            Qual será o meio de transporte da sua viagem?
            </Text>
          </View>
      </View>

      <View style={styles.containerScreen}>
        <Text style={styles.title}>Transporte</Text>
        <ScrollView style={styles.scrollView}>
          {transportOptions.map((option, index) => (
            <View key={index}>
              <View style={styles.transportOption}>
                <Icon name={option.icon} size={30} color="#16A45C" />
                <View style={styles.radioOptionContainer}>
                  <RadioButton.Group
                    onValueChange={(newValue) => setSelectedTransport(newValue)}
                    value={selectedTransport}
                  >
                    <RadioButton.Item
                      style={styles.radioOption}
                      label={option.label}
                      value={option.label}
                    />
                  </RadioButton.Group>
                </View>
              </View>
              <View style={styles.separator} />
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={saveData}>
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
  containerScreen: {
    flex: 1,
    padding: 20,
  },
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
  },
  antButton: {
    marginRight: 20,
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
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#2222221F',
    marginVertical: 5,
  },
  button: {
    padding: 10,
    backgroundColor: '#16A45C',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Mode;
