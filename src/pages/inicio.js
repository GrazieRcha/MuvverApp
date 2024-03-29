import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Hoje (12/01) - Amanhã (13/01)",
    origin: "Rio Brilhante para Dourados - MS",
    clientName: "Amanda Lima",
    stars: "4,97",
    totalDelivery: "575",
    mode: "Carro",
    profileImage: require("../img/mulher.jpg"),
    minValueAmount: "120,00",
    verified: true,
  },
  {
    id: "2",
    title: "Hoje (12/01) - Amanhã (13/01)",
    origin: "Rio Brilhante para Dourados - MS",
    clientName: "Pedro Arruda",
    stars: "4,0",
    totalDelivery: "70",
    mode: "Carro",
    profileImage: require("../img/img3.png"),
    minValueAmount: "150,00",
  },
  {
    id: "3",
    title: "Hoje (12/01) - Amanhã (13/01)",
    origin: "Rio Brilhante para Dourados - MS",
    clientName: "Barbara Costa",
    stars: "4,0",
    totalDelivery: "70",
    mode: "Carro",
    profileImage: require("../img/img4.png"),
    minValueAmount: "100,00",
    verified: true,
  },
  {
    id: "4",
    title: "Hoje (12/01) - Amanhã (13/01)",
    origin: "Rio Brilhante para Dourados - MS",
    clientName: "Bruna Silva",
    stars: "4,99",
    totalDelivery: "70",
    mode: "Carro",
    profileImage: require("../img/img2.png"),
    minValueAmount: "200,00",
  },
  {
    id: "5",
    title: "Hoje (12/01) - Amanhã (13/01)",
    origin: "Rio Brilhante para Dourados - MS",
    clientName: "Carlos Moura",
    stars: "5,0",
    totalDelivery: "70",
    mode: "Carro",
    profileImage: require("../img/img1.png"),
    minValueAmount: "160,00",
    verified: true,
  },
];

const Item = ({ item }) => (
  <View>
    {item.id !== "1" && <View style={styles.separator} />}

    <View>
      <Text style={styles.date}>{item.title}</Text>
      <Text style={styles.origin}>{item.origin}</Text>
    </View>

    <View style={styles.item}>
      <Image source={item.profileImage} style={styles.profileImage} />
      {item.verified && (
        <View style={styles.verifiedIconContainer}>
          <Icon name="verified" size={20} color="#32AC61" />
        </View>
      )}
      <View>
        <View style={styles.starsContainer}>
          <Text style={styles.name}>{item.clientName}</Text>
          <Icon name="circle" size={7} color="#22222252" />
          <Text style={styles.stars}>{item.stars}</Text>
          <Icon name="star" size={16} color="#222222" />
        </View>
        <View style={styles.deliveryInfo}>
          <Text
            style={styles.totalDelivery}
          >{`Total de entregas: ${item.totalDelivery}`}</Text>
          <Icon
            name="circle"
            size={7}
            color="#22222252"
            style={styles.circleIcon}
          />
          <Text style={styles.mode}>{item.mode}</Text>
        </View>
      </View>
      <View>
        <View style={styles.minValueContainer}>
          <Text style={styles.minValue}>Mínimo</Text>
          <Text style={styles.minValueAmount}>R$ {item.minValueAmount}</Text>
        </View>
      </View>
    </View>
  </View>
);

const CarrierFeedScreen = ({ navigation }) => {
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="black" />

      <View style={{ height: 150, padding: 10, backgroundColor: "black" }}>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Image
            source={require("../img/imgPerfil.jpeg")}
            style={{ width: 50, height: 50, borderRadius: 5, marginRight: 10 }}
          />
          <Text style={{ color: "white", fontSize: 20 }}>Feed</Text>
        </View>
        <View
          style={{
            marginTop: -50,
            marginBottom: 50,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity>
            <Icon
              name="info"
              size={25}
              color="white"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="settings" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Viagens")}>
              <Text style={styles.buttonHome}>Viagens</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Objetos")}>
              <Text style={styles.buttonHome}>Objetos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#32AC61",
            padding: 15,
            borderRadius: 50,
            flex: 1,
            marginRight: 5,
          }}
          onPress={() => navigation.navigate("Send")}
        >
          <Text
            style={{ color: "white", textAlign: "center", borderRadius: 50 }}
          >
            Vai viajar ou quer enviar?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: "white",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 1,
    borderRadius: 5,
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 8,
    marginLeft: 8,
    marginRight: 8,
  },
  buttonHome: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 60,
    marginRight: 90,
  },
  date: {
    fontSize: 12,
    color: "#222222",
    fontWeight: "bold",
    width: "60%",
    marginLeft: 10,
  },
  origin: {
    fontSize: 12,
    width: "70%",
    marginLeft: 10,
    color: "rgba(34, 34, 34, 0.32)",
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  stars: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 5,
    color: "#222222",
  },
  deliveryInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  totalDelivery: {
    fontSize: 12,
    color: "#22222252",
    marginRight: 5,
  },
  circleIcon: {
    marginRight: 5,
  },
  mode: {
    fontSize: 12,
    color: "#22222252",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  minValueContainer: {
    displey: "flex",
    alignItems: "flex-end",
  },
  minValue: {
    fontSize: 12,
    color: "#22222252",
  },
  minValueAmount: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#222222",
  },
  verifiedIconContainer: {
    position: "absolute",
    top: 45,
    left: 50,
  },
});

export default CarrierFeedScreen;
