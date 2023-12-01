import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Inicio from "../pages/inicio";
import Notificacao from "../pages/notification";
import Entregas from "../pages/entregas";
import Pedidos from "../pages/pedidos";
import Chat from "../pages/chat";

const Tab = createMaterialBottomTabNavigator();

export default function RoutesTab() {
  return (
    <Tab.Navigator
      activeColor="#222222"
      inactiveColor="#2222221F"
      shifting={true}
      sceneAnimationEnabled={true}
    >
      <Tab.Screen
        name="Inicio"
        component={Inicio}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarLabel: "Inicio",
        }}
      />
      <Tab.Screen
        name="Notificacao"
        component={Notificacao}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
          tabBarLabel: "Notificação",
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
          tabBarLabel: "Chat",
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-list"
              color={color}
              size={26}
            />
          ),
          tabBarLabel: "Pedidos",
        }}
      />
      <Tab.Screen
        name="Entregas"
        component={Entregas}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="truck" color={color} size={26} />
          ),
          tabBarLabel: "Entregas",
        }}
      />
    </Tab.Navigator>
  );
}
