import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Inicio from './inicio';
import Notificacao from './notification';
import Entregas from './entregas';
import Pedidos from './pedidos';
import Chat from './chat';


const Tab = createMaterialBottomTabNavigator();

function routesTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="Notificação" component={Notificacao} />
      <Tab.Screen name="Entregas" component={Entregas} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Pedidos" component={Pedidos} />
    </Tab.Navigator>
  );
}