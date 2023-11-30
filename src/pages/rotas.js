import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Rotas({ navigation }) {
  const [intermediaryPoints, setIntermediaryPoints] = useState([]);
  const [currentIntermediaryPoint, setCurrentIntermediaryPoint] = useState('');

  const addIntermediaryPoint = () => {
    setIntermediaryPoints([...intermediaryPoints, currentIntermediaryPoint]);
    setCurrentIntermediaryPoint('');
  };

  const removeLastIntermediaryPoint = () => {
    const updatedPoints = [...intermediaryPoints];
    updatedPoints.pop();
    setIntermediaryPoints(updatedPoints);
  };
    return (
        <View>
            <StatusBar barStyle="dark-content" backgroundColor="black" />

            <View
                style={{
                    height: 150,
                    width: '100%',
                    backgroundColor: 'black',
                }}
            >
                <View style={styles.topContainer}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate('Send')}
                    >
                        <Icon name="arrow-back" size={24} color="#fff" />
                    </TouchableOpacity>

                    <Text style={{
                        color: "#fff",
                    }}>Ser um Muvver</Text>

                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => navigation.navigate('Inicio')}
                    >
                        <Text style={{
                            color: "#fff",
                        }}>Cancelar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.middleContainer}>
                    <Text style={styles.middleText}>Qual o trajeto da sua viagem?</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Rotas')}>
                        <Text style={styles.buttonBar}>Rota</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonMaps} onPress={() => navigation.navigate('Mapa')}>
                        <Text style={styles.buttonBar}>Mapa</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.contentContainer}>
       
<View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={{ fontWeight: 'bold' }}>
            Selecione a data e rota da sua viagem
          </Text>
        </View>
        <View style={styles.dateContainer}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={styles.label}>Data de coleta</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira a data de coleta"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Data de entrega</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira a data de entrega"
            />
          </View>
        </View>

        <Text style={styles.label}>Cidade de Origem</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira a cidade de Origem"
        />

        {intermediaryPoints.map((point, index) => (
          <View key={index} style={styles.inputContainer}>
            <Text style={styles.label}>
              Ponto intermediário {index + 1}
            </Text>
            <TextInput
              style={styles.input}
              placeholder={`Insira o ponto intermediário ${index + 1}`}
              value={point}
              onChangeText={(text) => {
                const updatedPoints = [...intermediaryPoints];
                updatedPoints[index] = text;
                setIntermediaryPoints(updatedPoints);
              }}
            />
            {index === intermediaryPoints.length - 1 && (
              <TouchableOpacity
                onPress={removeLastIntermediaryPoint}
                style={styles.removeIcon}
              >
                <Icon name="close" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        ))}

        {currentIntermediaryPoint !== '' && (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Novo ponto intermediário</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira o novo ponto intermediário"
              value={currentIntermediaryPoint}
              onChangeText={(text) => setCurrentIntermediaryPoint(text)}
            />
          </View>
        )}
 
<TouchableOpacity
          style={styles.buttonInter}
          onPress={addIntermediaryPoint}
        >
             <Icon name="add-circle-outline" size={24} color="Black" marginRight="5%" />
          <Text style={styles.buttonTextInter}>Adicionar ponto intermediário</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Cidade de Destino</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira a cidade de destino"
        />
        <TouchableOpacity
          style={styles.buttonGreen}
          onPress={() => navigation.navigate('Tamanho')}
        >
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
  },
  backButton: {
    marginRight: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonBar:{
    fontSize: 16,
    color:'#fff',
    marginLeft: 80,
    marginRight: 80,
  },
  cancelButton: {
    marginLeft: 16,
  },
  cancelText: {
    color: '#fff',
  },
  middleContainer: {
    padding: 10,
  },
  middleText: {
    color: 'white',
    marginTop: 10,
    marginLeft: 22,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#16A45C',
    alignItems: 'center',
  },
  buttonMaps: {
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
 
},
buttonTextInter: {
  color: '#222222',
  fontSize: 16,

},
  contentContainer: {
    padding: 10,
  },
  textContainer: {
    marginBottom: 10,
    
  },
  dateContainer: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  buttonGreen: {
    backgroundColor: '#16A45C',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonInter: {
    flexDirection: 'row',
    color: 'black',
    padding: 10,
    left: 50,
    marginBottom: 10,
  },
  removeIcon: {
    position: 'absolute',
    top: 35,
    right: 10,
  },
  inputContainer: {
    position: 'relative',
  },
});