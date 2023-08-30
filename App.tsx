import 'react-native-gesture-handler';
import * as React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './src/pages/SignIn';
import Home from './src/pages/Home/Home';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MainApp({ route }: any) {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#28282B',  // setting background color to black
          paddingTop: 20,
        },
        drawerItemStyle: {
          marginVertical: 5,
          borderRadius: 10
        },
        drawerActiveBackgroundColor: 'rgba(255, 255, 255, 0.1)',
        drawerInactiveBackgroundColor: 'transparent',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerStyle: {
            backgroundColor: 'rgba(10, 10, 10, 1)', // matte black
          },
          headerTintColor: 'white',
        }} 
      />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
