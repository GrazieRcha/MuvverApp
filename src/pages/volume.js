
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';  

const Volume = () => {
  const [selectedVolume, setSelectedVolume] = useState(null);
  const navigation = useNavigation();  

  const VolumeOptions = [
    { label: 'Ate 1kg', icon: 'balance-scale' },
    { label: 'Até 5 kg', icon: 'balance-scale'},
    { label: 'Até 10 kg', icon: 'balance-scale' },
    { label: 'Até 20 kg', icon: 'balance-scale' },
    { label: 'Outro', icon: 'balance-scale' },
  ];

  const saveVolume = () => {
    console.log(`Volume selecionado: ${selectedVolume}`)
    navigation.navigate('Preco'); 
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="black" />

<View style={{ height: 120, width: '100%', backgroundColor: 'black' }}>
  <View style={styles.barContainer}>
    <TouchableOpacity
      style={styles.antButton}
      onPress={() => navigation.navigate('Tamanho')}
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
      <Text style={{color:'#fff', fontSize:20, marginLeft:20, marginTop:-50, padding:10}}>
      Qual o peso do volume?
      </Text>
    </View>
</View>
<View style={styles.containerVolume}>
      <Text style={styles.title}>Peso</Text>
      <ScrollView style={styles.scrollView}>
        <RadioButton.Group onValueChange={(newValue) => setSelectedVolume(newValue)} value={selectedVolume}>
          {VolumeOptions.map((option, index) => (
            <View key={index}>
              <View style={styles.transportOption}>
              <Icon name={option.icon} size={30} color="#16A45C" />
              <View style={styles.radioOptionContainer}>
                <RadioButton.Item 
                  style={styles.radioOption} 
                  label={option.label} 
                  value={option.label} 
                />
              </View>
            </View>
              <View style={styles.separator} />
          </View>
          ))}
        </RadioButton.Group>
      </ScrollView>
      <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Text onPress={() => navigation.navigate("Preco")}
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Pular Etapa
          </Text>
        </View>
      <TouchableOpacity style={styles.button} onPress={saveVolume}>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#2222221F",
    marginVertical: 5,
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
  containerVolume:{
    flex: 1,
    padding:20,
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

export default Volume;
