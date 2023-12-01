import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Send({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerBack}>
        <TouchableOpacity
          style={styles.leftButton}
          onPress={() => navigation.navigate("Inicio")}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginLeft: 15 }}>MUVVER</Text>
      </View>
      <Text style={styles.title}>
        Facilitando seus <Text style={{ fontWeight: "bold" }}>envios.</Text>
      </Text>
      <Text style={styles.labelLabel}>Entregue ou envie.</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Mode", { type: "Remetente" })}
        style={styles.button}
      >
        <LinearGradient
          colors={["#353740", "#222222"]}
          style={styles.buttonGradient}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonLabel}>Remetente</Text>
            <Text style={styles.buttonText}>
              Para onde quer enviar seu objeto?
            </Text>
          </View>
          <MaterialCommunityIcons name="cube-send" size={70} color="#16A45C" />
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Mode", { type: "Viajante" })}
        style={styles.button}
      >
        <LinearGradient
          colors={["#353740", "#222222"]}
          style={styles.buttonGradient}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonLabel}>Viajante</Text>
            <Text style={styles.buttonText}>Vai viajar para onde?</Text>
          </View>
          <MaterialCommunityIcons name="truck" size={64} color="#3BBEF8" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 255)",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBack: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  leftButton: {
    padding: 10,
  },
  title: {
    color: "#222222",
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonGradient: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
  },
  buttonContent: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  labelLabel: {
    marginBottom: 15,
    color: "#22222252",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});
