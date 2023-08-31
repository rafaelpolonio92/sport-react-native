import 'react-native-gesture-handler';
import * as React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './src/pages/SignIn';
import DrawerComponent from './src/components/Drawer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="MainApp" component={DrawerComponent} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
