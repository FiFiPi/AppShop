import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
const ButtonFilter = ({ title, onPress, active }) => {
    const choseButton = () => {
        onPress(title)
    }
    return (
        <TouchableOpacity onPress={choseButton} style={[styles.container, (active === title && styles.active)]}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonFilter