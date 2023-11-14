import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {AntDesign} from '@expo/vector-icons'

export default function People() {
  const navigation = useNavigation();
  const [people, setPeople] = useState("");

  return (
    <View>
        <Text style={styles.title}>Entregas Carrier Feed</Text>
        <Text style={styles.subtitle}>Viagens Hoje (12/01) - Amanhã (13/01)</Text>
        <Text style={styles.subtitle}>Rio Brilhante para Dourados - MS</Text>
        <Text style={styles.subtitle}>Passará por Nova Alvorada, Rio Brilhante e Paran...</Text>
        <Text style={styles.subtitle}>9:41 AM</Text>
        <Text style={styles.item}>Amanda Lima - R$ 4,97</Text>
        <Text style={styles.item}>Pedro Arruda - R$ 4,00</Text>
        <Text style={styles.item}>Bruna Silva - R$ 4,99</Text>
        <Text style={styles.item}>Carlos Moura - R$ 5,00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
