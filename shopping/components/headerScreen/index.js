import { View, Text } from 'react-native'
import React from 'react'
import BoxSearch from '../boxSearch'
import IconStyle from '../icon'
import styles from './styles'
const HeaderScreen = ({ product = false, right = true, name = false }) => {
    let iconRight = product ? 'cart' : 'sort'
    let middle = name ? <Text numberOfLines={1} style={styles.text}>{name}</Text> : <BoxSearch />
    return (
        <View style={[styles.container, (product && styles.background)]}>
            <View style={styles.top}>
                <IconStyle name={'back'} product={product} right={right} />
                <View style={styles.bottom}>{middle}</View>
                {
                    iconRight && (
                        <IconStyle name={iconRight} product />
                    )
                }
            </View>
        </View>
    )
}

export default HeaderScreen