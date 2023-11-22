import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const Send = () => {
 const [destination, setDestination] = useState('');
 const [travelLocation, setTravelLocation] = useState('');

 const handleSubmit = () => {
    if (!destination || !travelLocation) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    Alert.alert('Sucesso', `Objeto enviado para ${destination}. Viajante indo para ${travelLocation}.`);
    setDestination('');
    setTravelLocation('');
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Muvver - Facilitando seus envios</Text>

      <TextInput
        style={styles.input}
        placeholder="Para onde quer enviar seu objeto?"
        onChangeText={setDestination}
        value={destination}
      />

      <TextInput
        style={styles.input}
        placeholder="Vai viajar pra onde?"
        onChangeText={setTravelLocation}
        value={travelLocation}
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
 },
 title: {
    fontSize: 24,
    marginBottom: 20,
 },
 input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
 },
});

export default Send;