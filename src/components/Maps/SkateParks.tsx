import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import Config from 'react-native-config';

const GOOGLE_API_KEY = Config.GOOGLE_MAPS_API_KEY;

const center = {
  latitude: 40.730610,
  longitude: -73.935242,
};

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
  const [isMapReady, setIsMapReady] = useState(false);

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
  }, []);

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={{
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
    minWidth: "100%", // OPTIONAL
  },
});

export default SkateparksMap;
