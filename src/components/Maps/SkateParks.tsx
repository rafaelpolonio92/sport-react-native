import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';
import Config from 'react-native-config';

const GOOGLE_API_KEY = 'AIzaSyC9Hp_NMId2W3a7Q03VyTfMqy5406E8YZc';

type Skatepark = {
  place_id: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  name: string;
};

const SkateparksMap: React.FC = () => {
  const [skateparks, setSkateparks] = useState<Skatepark[]>([]);
  const [center, setCenter] = useState({
    latitude: 40.730610, // default values, will be overwritten by current location
    longitude: -73.935242,
  });
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCenter({ latitude, longitude });
      },
      error => {
        Alert.alert('Location Error', 'Failed to get current location');
        console.error(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  }, []);
  console.log(center)
  useEffect(() => {
    const fetchSkateparks = async () => {
      try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${center.latitude},${center.longitude}&radius=5000&keyword=skatepark&key=${GOOGLE_API_KEY}`);
        setSkateparks(response.data.results);
      } catch (error) {
        console.error("Error fetching skateparks:", error);
      }
    };

    fetchSkateparks();
  }, [center]);

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        region={{
          ...center,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onLayout={() => setIsMapReady(true)}
      >
        {isMapReady && skateparks.map(park => (
          <Marker
            key={park.place_id}
            coordinate={{
              latitude: park.geometry.location.lat, 
              longitude: park.geometry.location.lng
            }}
            title={park.name}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    minHeight: "100%",
    minWidth: "100%",
  },
});

export default SkateparksMap;
