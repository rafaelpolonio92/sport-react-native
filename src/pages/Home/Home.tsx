import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { styles } from "./styles";
import TrickCards from "../../components/Cards/TrickCards";

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
        onError={console.warn}
      />
    );
  }

  return (
    <>
     <View style={styles.mainContainer}>
        <Text style={styles.text}>
          IMPROVE YOUR SKATEBOARDING
        </Text>
    </View>
    <TrickCards />
    </>
  );
};

export default HomeScreen;
