import { FC, useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, Platform } from 'react-native';
import { styles } from './style';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_USER, GET_USER_BY_EMAIL } from './graphql';

type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
  MainApp: { initialRouteName?: string };
};

type User = {
  email: string;
  username: string;
  password?: string;
  google?: string;
}

const googleLoginUrl = "https://www.googleapis.com/userinfo/v2/me";

const fetchFonts = () => {
  return Font.loadAsync({
    'Anton-Regular': require('../../../assets/fonts/Anton-Regular.ttf'),
  });
};

const SignIn: FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'SignIn'>>();
  const [fontLoaded, setFontLoaded] = useState(false);
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [createUser] = useMutation(CREATE_USER);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "480473165483-dqomurav449a5si5res1k48se3klmmmb.apps.googleusercontent.com",
    iosClientId: "480473165483-63atvsg1pkljpamt0lr1e6t1e9r1bh18.apps.googleusercontent.com",
    webClientId: "480473165483-jk6h11ego66aqhfup8mjkr8kdv3ann44.apps.googleusercontent.com",
  });

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response, token]);

  const handleUserLogin = async ({
    email,
    username,
    password,
    google
  }: User): Promise<void> => {
    try {
      await createUser({
        variables: {
          email,
          username,
          password,
          google
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
  const {
    data = {},
    error,
    loading,
  } = useQuery(GET_USER_BY_EMAIL, {
    variables: {
      email: 'test@gmail.com',
    },
  });
  console.log({error})

  console.log({ data })
  async function handleSignInWithGoogle() {
    const user = await getLocalUser();
    if (!user) {
      if (response?.type === "success") {
        setToken(response.authentication?.accessToken!);
        getUserInfo(response.authentication?.accessToken!);
        navigation.navigate("MainApp", { initialRouteName: "Home" });
      }
    } else {
      setUserInfo(user);
      navigation.navigate("MainApp", { initialRouteName: "Home" });
      console.log("loaded locally");
    }
  }

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@bla");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token: string) => {
    if (!token) return;
    try {
      const response = await fetch(
        googleLoginUrl,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      console.log({ user })
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.log(error)
    }
  };
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
    <View style={styles.screen}>
      <Image source={require('../../../assets/quiksilver-3-logo-png-transparent.png')} style={styles.image}/>
      <Text style={styles.text}>YOUR SKATEBOARDING APP</Text>
      <Text style={styles.signIn}>Sign in with Google</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => {
            promptAsync();
          }}>
          <Image source={require('../../../assets/google.png')} style={styles.logo} />
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignIn;
