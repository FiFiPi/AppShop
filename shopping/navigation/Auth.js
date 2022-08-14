import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SignUpScreen } from '../screens'

const Stack = createStackNavigator();

function AuthStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
export default AuthStackScreen
