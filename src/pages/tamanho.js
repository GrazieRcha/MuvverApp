import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { RadioButton } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Tamanho = () => {
  const [selectedTransport, setSelectedTransport] = useState(null);
  const navigation = useNavigation();

  const transportOptions = [
    { label: "Envelope", tamanho: '00 x 00 cm', icon: "envelope",},
    { label: "Livro", tamanho: '00 x 00 cm', icon: "book" },
    { label: "Caixa de sapato", tamanho: '00 x 00 cm', icon: "inbox" },
    { label: "Mochila", tamanho: '00 x 00 cm', icon: "shopping-bag" },
    { label: "Mala grande", tamanho: '00 x 00 cm', icon: "suitcase" },
    { label: "Caixa grande", tamanho: '00 x 00 cm', icon: "cube" },
  ];

  const saveData = () => {
    console.log(`Meio de transporte selecionado: ${selectedTransport}`);
    navigation.navigate("Volume");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="black" />

      <View>
         <View style={styles.barContainer}>
        <TouchableOpacity
          style={styles.antButton}
          onPress={() => navigation.navigate("Rotas")}
        >
          <Icon name="arrow-left" size={16} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: "#fff" }}>Ser um Muvver</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Inicio")}>
          <Text style={{ color: "#fff" }}>Cancelar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ color: "#fff", marginLeft:10, fontSize:20, display:'block', marginTop:-60, marginLeft:15}}>
          O volume que você pode deslocar tem tamanho similar a que?
        </Text>
      </View>
      </View>
      <View style={styles.containerTamanho}>
        <Text style={styles.title}>Tamanho</Text>
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
                    <View>
                    <Text style={{ color:'#22222229', left: 20}}>{option.tamanho}</Text>
                    </View>
                  </RadioButton.Group>
                </View>
              </View>
              <View style={styles.separator} />
            </View>
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Text onPress={() => navigation.navigate("Volume")}
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Pular Etapa
          </Text>
        </View>
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
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#2222221F",
    marginVertical: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  containerTamanho: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    flex: 1,
  },
  transportOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 5,
  },
  radioOptionContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  radioOption: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    padding: 10,
    backgroundColor: "#16A45C",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  barContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 90,
    backgroundColor: "black",
  },
  antButton: {
    marginRight: 20,
  },
});

export default Tamanho;
