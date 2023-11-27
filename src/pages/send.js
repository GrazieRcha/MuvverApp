import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function Send({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Facilitando seus <Text style={{ fontWeight: 'bold' }}>envios.</Text> 
      </Text>
      <Text> Entregue ou envie.</Text>
     <TouchableOpacity onPress={() => navigation.navigate('Mode')} style={styles.button}>
      <Text>Remetente</Text>
        <Text style={styles.buttonText}>Para onde quer enviar seu objeto?</Text>
        <MaterialCommunityIcons name="truck" size={54} color="white" />
      </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate('Mapa')} style={styles.button}>
         <Text>Viajante</Text>
        <Text style={styles.buttonText}>Vai viajar para onde?</Text>
        <MaterialCommunityIcons name="car" size={54} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#222222',
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#353740',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
});
