import { View, Text, TouchableOpacity } from 'react-native'
import InputStyle from '../../components/inputStyle'
import CheckCart from '../../components/checkCart'
import { TextInput } from 'react-native-paper'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MESSAGE } from '../../contains/default'
import { fetchAsyncListSingle } from '../../store/slices/buy'
import ShowToast from '../../help/ShowToast'

import styles from './styles'
const InfoCartScreen = () => {
    const dispatch = useDispatch()
    const [code, setCode] = useState('')
    const [items, setItems] = useState([])
    const [showCheckCart, setShowCheckCart] = useState(false)

    const click = () => {
        dispatch(fetchAsyncListSingle(code))
            .then(res => {
                setShowCheckCart(false)
                if (!res.error) {
                    setShowCheckCart(true)
                    setItems(res.payload?.order_items)
                } else {
                    ShowToast('Sai code "VdlpTlzqyKsfnpji"')
                    setCode(false)
                }
            })
    }
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TextInput
                    label={'Nhập mã đơn hàng'}
                    value={code}
                    onChangeText={text => setCode(text)}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={click}>
                <Text>Kiểm tra đơn hàng</Text>
            </TouchableOpacity>
            {
                showCheckCart && (
                    <CheckCart items={items} />
                )
            }
        </View>
    )
}

export default InfoCartScreen