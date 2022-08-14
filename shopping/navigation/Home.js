import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, CategoryScreen } from '../screens'
import { COLORS } from '../contains'
import { IconStyle } from '../components';
import Header from '../components/header'
import HeaderNameScreen from '../components/headerName';
const HomeStack = createStackNavigator();

function HomeStackScreen(props) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: COLORS.main,
        headerStyle: { height: 120 },
        headerTitleStyle: { fontSize: 30 }
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ header: () => (<Header name={'SHOPONLINE'} />) }} />
      <HomeStack.Screen name={"CategoryScreen"} component={CategoryScreen} options={{ header: () => (<HeaderNameScreen />) }} />
    </HomeStack.Navigator>
  );
}
export default HomeStackScreen
