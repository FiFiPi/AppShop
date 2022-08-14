import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { CategoryAllScreen } from '../screens'
import Header from '../components/header';

const Stack = createStackNavigator();

function CategoryStackScreen(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'gray' },
        headerTintColor: 'yellow'
      }}
    >
      <Stack.Screen name="CategoryAllScreen" component={CategoryAllScreen} options={{ header: () => (<Header name={'Danh mục'} icon={'sort'} />) }} />
    </Stack.Navigator>
  );
}
export default CategoryStackScreen
