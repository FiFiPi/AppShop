import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
const CheckLogin = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bạn chưa đăng nhập tài khoản</Text>
        </View>
    )
}

export default CheckLogin