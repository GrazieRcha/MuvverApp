import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";

import RoutesTab from "./src/Routes/RoutesTab.js";
import Send from "./src/pages/send.js";
import Mode from "./src/pages/mode.js";
import Mapa from "./src/pages/mapa.js";
import Rotas from "./src/pages/rotas.js";
import Volume from "./src/pages/volume.js";
import Tamanho from "./src/pages/tamanho.js";
import Preco from "./src/pages/preco.js";
import State from "./src/pages/state.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={RoutesTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Send"
            component={Send}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Mode"
            component={Mode}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Mapa" component={Mapa} />

          <Stack.Screen
            name="Rotas"
            component={Rotas}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Tamanho"
            component={Tamanho}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Volume"
            component={Volume}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Preco"
            component={Preco}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="State"
            component={State}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
