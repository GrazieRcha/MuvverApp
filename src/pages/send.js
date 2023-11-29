import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Send({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Facilitando seus <Text style={{ fontWeight: 'bold' }}>envios.</Text>
      </Text>
      <Text style={styles.labelLabel}>Entregue ou envie.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Mode')} style={styles.button}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonLabel}>Remetente</Text>
          <Text style={styles.buttonText}>Para onde quer enviar seu objeto?</Text>
        </View>
        <MaterialCommunityIcons name="cube-send" size={70} color="#24B96E" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Mode')} style={styles.button}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonLabel}>Viajante</Text>
          <Text style={styles.buttonText}>Vai viajar para onde?</Text>
        </View>
        <MaterialCommunityIcons name="truck" size={64} color="#3BBEF8" />
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
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222222',
    padding: 15,
    marginTop: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'column',
    padding: 30,
  },
  labelLabel:{
    marginBottom: 15,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
  },
});
