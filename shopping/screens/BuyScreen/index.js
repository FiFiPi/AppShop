import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import ProductList from '../../components/productList'
import { useSelector, useDispatch } from 'react-redux'
import InputStyle from '../../components/inputStyle'
import { FormatPrice } from '../../help'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { fetchAsyncBuy } from '../../store/slices/buy'
import { RemoveAll } from '../../store/slices/cart'
import ShowToast from '../../help/ShowToast'
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

const BuyScreen = () => {
    const router = useRoute()
    const { total } = router.params
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.Cart.cart)
    const [code, setCode] = useState('')
    const [visible, setVisible] = useState(false)
    const navigation = useNavigation()
    // const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);
    const handleRender = ({ item }) => {
        // console.log('item', item)
        return <ProductList item={item} />
    }

    const handleBuy = () => {
        dispatch(fetchAsyncBuy({ data: cartItems }))
            .then(res => {
                if (!res.error) {
                    setCode(res.payload.code)
                    setVisible(true)
                } else {
                    ShowToast('Thất bại là mẹ thành công!')
                }
            })
    }
    const handleSuccess = () => {
        setVisible(false)
        dispatch(RemoveAll())
        navigation.navigate('Home')
    }
    return (
        <>
            <ScrollView style={styles.container}>
                <FlatList
                    data={cartItems}
                    renderItem={handleRender}
                    keyExtractor={(item) => item.id.toString()}
                />
                <View style={styles.viewPrice}>
                    <Text>Tổng đơn hàng</Text>
                    <Text>{FormatPrice(total)}</Text>
                </View>
                <View >
                    <InputStyle name={'Mã giảm giá'} />
                    <Text style={styles.price}>{FormatPrice(3000000)}</Text>
                </View>
                <View >
                    <InputStyle name={'Phí vận chuyển'} />
                    <Text style={styles.price}>{FormatPrice(3000000)}</Text>
                </View>
                <View >
                    <InputStyle name={'Tổng thanh toán'} />
                    <Text style={styles.price}>{FormatPrice(3000000)}</Text>
                </View>
            </ScrollView>

            <Provider>
                <View>
                    <Portal>
                        <Dialog visible={visible} onDismiss={hideDialog}>
                            <Dialog.Title>Thông báo!</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>Mã đơn hàng của bạn là: {code}</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={handleSuccess}>Trở về!</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            </Provider>
            <View style={styles.apply}>
                <TouchableOpacity style={styles.button} onPress={handleBuy}>
                    <Text style={styles.buttonText}>Mua hàng</Text>
                </TouchableOpacity>
            </View>


        </>
    )
}

export default BuyScreen