// import React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importar ícones da biblioteca

// import Inicio from '../pages/inicio';
// import Notificacao from '../pages/notification';
// import Entregas from '../pages/entregas';
// import Pedidos from '../pages/pedidos';
// import Chat from '../pages/chat';

// const Tab = createMaterialBottomTabNavigator();

// export default function RoutesTab() {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         style: {
//           backgroundColor: '#2222221F',
//         },
//         activeTintColor: '#38A66D',
//       }}
//     >
//       <Tab.Screen
//         name="Inicio"
//         component={Inicio}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notificacao"
//         component={Notificacao}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Entregas"
//         component={Entregas}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="truck" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Chat"
//         component={Chat}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="chat" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Pedidos"
//         component={Pedidos}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="clipboard-list" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }



import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Inicio from '../pages/inicio';
import Notificacao from '../pages/notification';
import Entregas from '../pages/entregas';
import Pedidos from '../pages/pedidos';
import Chat from '../pages/chat';

const Tab = createMaterialBottomTabNavigator();

export default function RoutesTab() {
  return (
    <Tab.Navigator
      activeColor="#222222"
      inactiveColor="#2222221F" // Cor de fundo inativa
      shifting={true}
      sceneAnimationEnabled={false}
      barStyle={{ backgroundColor: '#B8B8B8' }} // Cor de fundo da barra completa
    >
      <Tab.Screen
        name="Inicio"
        component={Inicio}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarLabel: 'Inicio', // Nome da aba
        }}
      />
      <Tab.Screen
        name="Notificacao"
        component={Notificacao}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
          tabBarLabel: 'Notificação', // Nome da aba
        }}
      />
      
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
          tabBarLabel: 'Chat', // Nome da aba
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-list" color={color} size={26} />
          ),
          tabBarLabel: 'Pedidos', // Nome da aba
        }}
      />
      <Tab.Screen
        name="Entregas"
        component={Entregas}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="truck" color={color} size={26} />
          ),
          tabBarLabel: 'Entregas', // Nome da aba
        }}
      />
    </Tab.Navigator>
  );
}