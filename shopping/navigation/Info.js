import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { InfoScreen, InfoCartScreen, InfoShipScreen } from '../screens'
import Header from '../components/header'
import HeaderScreen from '../components/headerScreen'
import BoxSearch from '../components/boxSearch'
const Stack = createStackNavigator();

function InfoStackScreen(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'red' },
        headerTintColor: 'white',
        headerTitleStyle: { fontSize: 22 }
      }}
    >
      <Stack.Screen name="InfoScreen" component={InfoScreen} options={{ header: () => (<Header name={'Thông tin cá nhân'} />) }} />
      <Stack.Screen name='InfoCartScreen' component={InfoCartScreen} options={{ header: () => (<HeaderScreen right={false} />) }} />
      <Stack.Screen name='InfoShipScreen' component={InfoShipScreen} options={{ header: () => (<HeaderScreen />) }} />
    </Stack.Navigator>
  );
}
export default InfoStackScreen
