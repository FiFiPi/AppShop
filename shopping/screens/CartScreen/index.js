import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'
import ProductList from '../../components/productList'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

const CartScreen = () => {
    const navigation = useNavigation()
    const cartItems = useSelector(state => state.Cart.cart)
    const [total, settotal] = useState(0)

    const openBuy = () => {
        navigation.navigate('BuyScreen', {
            total
        })
    }
    useEffect(() => {
        let totalCurrent = 0
        cartItems.map(item => {
            totalCurrent += item.total
        })
        settotal(totalCurrent)
    }, [cartItems])

    if (cartItems.length <= 0) {
        return <Text style={styles.empty}>Bạn chưa thêm đơn hàng vào giỏ!</Text>
    }
    handleRender = ({ item }) => {
        return <ProductList item={item} cart />
    }
    return (
        <>
            <ScrollView>
                <FlatList
                    renderItem={handleRender}
                    data={cartItems}
                    keyExtractor={(item) => item.id.toString()}
                />
            </ScrollView>
            <View style={styles.apply}>
                <TouchableOpacity onPress={openBuy} style={styles.button}>
                    <Text style={styles.buttonText}>Thanh toán</Text>
                </TouchableOpacity>
            </View>
        </>

    )
}

export default CartScreen