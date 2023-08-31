import { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../pages/Home/Home';
const Drawer = createDrawerNavigator();

function DrawerNavigator({ route }: any) {
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
        component={HomeScreen} 
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

export default DrawerNavigator