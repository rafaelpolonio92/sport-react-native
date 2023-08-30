import { Button, View, Text } from 'react-native';
import React from 'react';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Rafael Polonio</Text>
    </View>
  );
};

export default HomeScreen;