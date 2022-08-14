import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/header'
import { FavoriteScreen } from '../screens'
const Stack = createStackNavigator();

function FavoriteStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                // headerStyle: { backgroundColor: 'red' }
            }}
        >
            <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{ header: () => (<Header name={'Yêu thích'} icon={'delete'} />) }} />
        </Stack.Navigator>
    );
}
export default FavoriteStackScreen
