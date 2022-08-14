import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackScreen from './Home'
import CategoryStackScreen from './Category'
import InfoStackScreen from './Info'
import FavoriteStackScreen from './Favorite'
import { COLORS } from '../contains'

const Tab = createBottomTabNavigator();

const MyNavigation = (props) => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'ios-home' : 'ios-home-outline'
              break;
            case 'Category':
              iconName = focused ? 'ios-folder-open' : 'ios-folder-open-outline'
              break;
            case 'Info':
              iconName = focused ? 'ios-alert' : 'ios-alert-outline'
              break;
            case 'Favorite':
              iconName = focused ? 'ios-heart' : 'ios-heart-outline'
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.white,
        tabBarStyle: {
          backgroundColor: COLORS.grey,
          height: 65,
          paddingBottom: 10
        },
        tabBarLabelStyle: {
          fontSize: 15,
          color: COLORS.white
        },
        headerShown: false
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} options={{ title: 'Trang chủ' }} />
      <Tab.Screen name="Category" component={CategoryStackScreen} options={{ title: 'Danh mục' }} />
      <Tab.Screen name="Favorite" component={FavoriteStackScreen} options={{ title: 'Yêu thích' }} />
      <Tab.Screen name="Info" component={InfoStackScreen} options={{ title: 'Thông tin' }} />

    </Tab.Navigator>
  )
}

export default MyNavigation
