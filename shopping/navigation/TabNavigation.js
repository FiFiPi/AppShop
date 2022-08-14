import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator, Header } from '@react-navigation/stack';
import { COLORS } from '../contains'
import MyNavigation from './index'
import HeaderScreen from '../components/headerScreen'
import { FillterSrceen, CartScreen, SearchScreen, ProductScreen, CategoryScreen, BuyScreen, LoginScreen } from '../screens'


const Stack = createStackNavigator();


const TabStackScreen = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: COLORS.grey }
            }}
        >
            <Stack.Screen name="MyNavigation" component={MyNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="FillterScreen" component={FillterSrceen} options={{ header: () => (<HeaderScreen right={true} name={'Lọc sản phẩm'} />) }} />
            <Stack.Screen name="CartScreen" component={CartScreen} options={{ header: () => (<HeaderScreen right={false} name={'Giỏ hàng của bạn'} />) }} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ header: () => (<HeaderScreen product />) }} />
            <Stack.Screen name="BuyScreen" component={BuyScreen} options={{ header: () => (<HeaderScreen name={'Xác nhận đơn hàng'} right={false} />) }} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ header: () => (<HeaderScreen right={false} />) }} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default TabStackScreen