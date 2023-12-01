import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

export default function Mapa() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  async function requestForegroundPermissions() {
    try {
      const { granted } = await requestForegroundPermissionsAsync();

      if (granted) {
        try {
          const locationWatcher = await watchPositionAsync(
            {
              accuracy: Accuracy.High,
              timeInterval: 1000,
              distanceInterval: 1,
            },
            (newPosition) => {
              console.log("Nova localização:", newPosition);
              setLocation(newPosition);
            }
          );

          return () => locationWatcher.remove();
        } catch (locationError) {
          console.error("Erro ao obter localização:", locationError);
          setError("Erro ao obter localização");
        }
      } else {
        console.error("Permissão de localização não concedida.");
        setError("Permissão de localização não concedida");
      }
    } catch (permissionError) {
      console.error(
        "Erro ao obter permissões de localização:",
        permissionError
      );
      setError("Erro ao obter permissões de localização");
    }
  }

  useEffect(() => {
    requestForegroundPermissions();
  }, []);

  if (error) {
    return <Text>{error}</Text>;
  }

  if (!location) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.mapsContainer}>
      {location && location.coords ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Sua Localização"
            description={`Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`}
          />
        </MapView>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mapsContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  map: {
    flex: 1,
  },
});
