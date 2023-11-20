import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
// import NavBar from './src/components/NavBar.js';
// import TabBar from './src/components/Footer.js';

const DATA = [
 {
    id: '1',
    title: 'Rio Brilhante para Dourados - MS',
    origin: 'Nova Alvorada, Rio brilhante e Parana',
    start: '12/01',
    end: '13/01',
    deliveryTime: '9:41 AM',
    clientName: 'Amanda Lima',
    stars: '4,97',
    totalDelivery: '575',
    mode: 'Carro',
 },

 {
  id: '2',
  title: 'Rio Brilhante para Dourados - MS',
  origin: 'Nova Alvorada, Rio brilhante e Parana',
  start: '12/01',
  end: '13/01',
  deliveryTime: '9:41 AM',
  clientName: 'Amanda Lima',
  stars: '4,97',
  totalDelivery: '575',
  mode: 'Carro',
},

];


const Item = ({ title, origin, start, end, deliveryTime, clientName, stars, totalDelivery, mode }) => (
 <View style={styles.item}>
    {/* <NavBar title="Home" /> */}
  
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{origin}</Text>
    <Text style={styles.description}>{`${start} - ${end}`}</Text>
    <Text style={styles.description}>{deliveryTime}</Text>
    <Text style={styles.description}>{clientName}</Text>
    <Text style={styles.description}>{stars}</Text>
    <Text style={styles.description}>{`Total de entregas: ${totalDelivery}`}</Text>
    <Text style={styles.description}>{mode}</Text>
    <footer>


    </footer>
 </View>
 
);

const CarrierFeedScreen = () => {
 const renderItem = ({ item }) => (
    <Item
      title={item.title}
      origin={item.origin}
      start={item.start}
      end={item.end}
      deliveryTime={item.deliveryTime}
      clientName={item.clientName}
      stars={item.stars}
      totalDelivery={item.totalDelivery}
      mode={item.mode}
    />
 );

 return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    paddingTop: 22,
 },
 item: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 1,
    flexDirection: 'column',
    borderRadius: 5,
    padding: 10,
 },
 title: {
    fontSize: 14,
    fontWeight: 'bold',
 },
 description: {
    fontSize: 12,
    color: '#999',
 },
});

export default CarrierFeedScreen;