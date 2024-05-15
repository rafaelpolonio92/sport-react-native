import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { styles } from "./styles";
import TrickCards from "../../components/Cards/TrickCards";
import SkateparksMap from "../../components/Maps/SkateParks";

const fetchFonts = () => {
  return Font.loadAsync({
    'Anton-Regular': require('../../../assets/fonts/Anton-Regular.ttf'),
  });
};

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.log}
      />
    );
  }

  return (
    <>
    <ScrollView style={styles.scrollView}>
      <View style={styles.mainContainer}>
          <Text style={styles.text}>
            IMPROVE YOUR SKATEBOARDING
          </Text>
      </View>
      <View style={styles.trickCardsContainer}>
        <TrickCards />
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.text}>
          FIND NEARBY SKATEPARKS
        </Text>
      </View>
      <View style={styles.mapContainer}>
        <SkateparksMap />
      </View>
    </ScrollView>
    </>
  );
};

export default HomeScreen;
