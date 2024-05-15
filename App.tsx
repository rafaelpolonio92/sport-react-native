import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './src/pages/SignIn';
import DrawerComponent from './src/components/Drawer';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Config from 'react-native-config';

const client = new ApolloClient({
  uri: Config.REACT_APP_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name="MainApp" component={DrawerComponent} options={{ headerShown: false }} />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
}
