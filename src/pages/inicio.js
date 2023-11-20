import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { TouchableOpacity } from 'react-native';


const DATA = [
  {
    id: '1',
    title: 'Hoje (12/01) - Amanhã (13/01)',
    origin: 'Rio Brilhante para Dourados - MS',
    clientName: 'Amanda Lima',
    stars: '4,97',
    totalDelivery: '575',
    mode: 'Carro',
    profileImage: require('../img/mulher.jpg'),
  },
  {
    id: '2',
    title: 'Hoje (12/01) - Amanhã (13/01)',
    origin: 'Rio Brilhante para Dourados - MS',
    clientName: 'Pedro Arruda',
    stars: '4,0',
    totalDelivery: '70',
    mode: 'Carro',
    profileImage: require('../img/mulher.jpg'),
  },
  {
   id: '3',
   title: 'Hoje (12/01) - Amanhã (13/01)',
   origin: 'Rio Brilhante para Dourados - MS',
   clientName: 'Pedro Arruda',
   stars: '4,0',
   totalDelivery: '70',
   mode: 'Carro',
   profileImage: require('../img/mulher.jpg'),
 },
 {
   id: '4',
   title: 'Hoje (12/01) - Amanhã (13/01)',
   origin: 'Rio Brilhante para Dourados - MS',
   clientName: 'Pedro Arruda',
   stars: '4,0',
   totalDelivery: '70',
   mode: 'Carro',
   profileImage: require('../img/mulher.jpg'),
 },
 {
   id: '5',
   title: 'Hoje (12/01) - Amanhã (13/01)',
   origin: 'Rio Brilhante para Dourados - MS',
   clientName: 'Pedro Arruda',
   stars: '4,0',
   totalDelivery: '70',
   mode: 'Carro',
   profileImage: require('../img/mulher.jpg'),
 },
];

const Item = ({ id, title, origin, clientName, stars, totalDelivery, mode, profileImage }) => (
  <View>
    {id !== '1' && <View style={styles.separator} />}
    <View style={styles.item}>
      <Image source={profileImage} style={styles.profileImage} />
      <View>
        <Text style={styles.date}>{title}</Text>
        <Text style={styles.origin}>{origin}</Text>
        <View style={styles.starsContainer}>
          <Text style={styles.name}>{clientName}</Text>
          <Icon name="circle" size={1} color="#22222252" />
          <Text style={styles.stars}>{stars}</Text>
          <Icon name="star" size={16} color="#222222" />      
        </View>
        <View style={styles.deliveryInfo}>
          <Text style={styles.totalDelivery}>{`Total de entregas: ${totalDelivery}`}</Text>
          <Icon name="circle" size={1} color="#22222252" style={styles.circleIcon} />
          <Text style={styles.mode}>{mode}</Text>
        </View>
      </View>
      <View style={styles.minValueContainer}>
        <Text style={styles.minValue}>Mínimo</Text>
        <Text style={styles.minValueAmount}>R$ 100,00</Text>
      </View>
    </View>
  </View>
);

const CarrierFeedScreen = () => {
  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      title={item.title}
      origin={item.origin}
      clientName={item.clientName}
      stars={item.stars}
      totalDelivery={item.totalDelivery}
      mode={item.mode}
      profileImage={item.profileImage}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="black"/>

      <View
        style={{
          height: 150,
          padding: 10,
          backgroundColor: 'black',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {/* Imagem no canto esquerdo */}
        <Image
          source={require('../img/mulher.jpg')}
          style={{ width: 50, height: 50, borderRadius: 5, marginRight: 10 }}
        />
        {/* Texto ao lado da imagem */}
        <Text style={{ color: 'white', fontSize: 20 }}>Feed</Text>

        
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* Botões na margem inferior */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#32AC61',
            padding: 10,
            borderRadius: 50,
            flex: 1,
            marginRight: 5,
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center', borderRadius: 50 }}>Vai viajar ou quer enviar?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'white',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 1,
    borderRadius: 5,
    padding: 10,
  },
  separator: {
   height: 1,
   backgroundColor: '#ccc',
   marginVertical: 8,
   marginLeft: 8,
   marginRight: 8,
  },
  date: {
   fontSize: 12,
   color: '#222222',
   fontWeight: 'bold',
   alignSelf: 'flex-start', 
 },
 origin: {
   fontSize: 12,
   color: 'rgba(34, 34, 34, 0.32)',
   alignSelf: 'flex-start', 
 },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    marginRight: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  stars: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
    color: '#222222',
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  totalDelivery: {
    fontSize: 12,
    color: '#22222252',
    marginRight: 5,
  },
  circleIcon: {
    marginRight: 5,
  },
  mode: {
    fontSize: 12,
    color: '#22222252',
  },
 profileImage: {
   width: 50,
   height: 50,
   borderRadius: 5,
   marginTop: 52,
   marginRight: 5,
 },
  minValueContainer: {
    alignItems: 'flex-end',
  },
  minValue: {
    fontSize: 12,
    color: '#22222252',
  },
  minValueAmount: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#222222',
  },
});

export default CarrierFeedScreen;
