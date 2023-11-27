import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';



export default function Mapa() {
  const [location, setLocation] = useState(null);

  async function requestForegroundPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
      console.log("loc atual", currentPosition);
    }
  }

  useEffect(() => {
    requestForegroundPermissions();
  }, []);

  return (
    <View style={styles.mapsContainer}>
    

    </View>
  );
}

const styles = StyleSheet.create({
  mapsContainer: {
    flex: 1,
   
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map:
  {
    flex: 1,
    width: '100%',
  }
});
