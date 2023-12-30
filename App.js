import { StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import 'react-native-gesture-handler';
import LandingPage from './screens/LandingPage'
import Login from './screens/Auth/Login';
import SignUp from './screens/Auth/SignUp';
import Home from './screens/Home/Home';


const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="#fff" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Welcome' component={LandingPage} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}