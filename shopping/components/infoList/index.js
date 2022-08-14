import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';

import styles from './styles'
const InfoList = ({ name, onPress }) => {
    let icon, text
    switch (name) {
        case 'info':
            icon = < Feather name="info" size={24} color="black" />
            text = 'Quản lý tài khoản'
            break;
        case 'cart':
            icon = <AntDesign name="shoppingcart" size={24} color="black" />
            text = 'Thông tin đơn hàng'
            break
        case 'ship':
            icon = <MaterialIcons name="local-shipping" size={24} color="black" />
            text = 'Giao hàng'
            break
        default:
            break;
    }
    return (
        <TouchableOpacity onPress={() => onPress()} style={styles.container}>
            <View style={styles.box}>
                {icon}
                <Text style={styles.text}>{text}</Text>
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default InfoList