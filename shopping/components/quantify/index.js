import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
const Quantify = ({ handleChangeNumber, quantify, small }) => {
    const handleChange = (type) => {

        switch (type) {
            case 'add':
                handleChangeNumber(quantify + 1)
                break;
            case 'minus':
                if (small && quantify - 1 === 0) {
                    handleChangeNumber(0)
                } else {
                    handleChangeNumber(quantify - 1 === 0 ? 1 : quantify - 1)
                }
                break
            default:
                break;
        }
    }
    return (
        <>
            {
                !small ? (
                    <View style={styles.amount}>
                        <TouchableOpacity style={styles.signal} onPress={() => handleChange('minus')}>
                            <Text style={styles.number}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.number}>{quantify}</Text>
                        <TouchableOpacity style={styles.signal} onPress={() => handleChange('add')}>
                            <Text style={styles.number}>+</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.amount_small}>
                        <TouchableOpacity style={styles.signal_small} onPress={() => handleChange('minus')}>
                            <Text style={styles.number_small}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.number_small}>{quantify}</Text>
                        <TouchableOpacity style={styles.signal_small} onPress={() => handleChange('add')}>
                            <Text style={styles.number_small}>+</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </>

    )
}

export default Quantify