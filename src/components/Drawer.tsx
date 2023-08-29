import { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../pages/Home';
const Drawer = createDrawerNavigator();

const DrawerNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        // For the drawer item styles
        screenOptions={{
          drawerActiveBackgroundColor: '#FFFFFF',
          drawerInactiveBackgroundColor: '#000',
          drawerActiveTintColor: "#000",
          drawerInactiveTintColor: '#FFFFFF',
          drawerStyle: {
            backgroundColor: "#000",
            width: 250
          }
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Test" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavigator