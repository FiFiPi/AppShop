import { View, Text, Image } from 'react-native'
import React from 'react'
import { IconStyle } from '../../components'

import styles from './styles'
const CategoryProduct = () => {
    return (
        <View style={styles.container}>
            <View style={styles.category}>
                <View style={styles.iconLeft}>
                    <IconStyle name={'back'} style={styles.icon} />
                    <IconStyle name={'back'} />
                </View>
                <View style={styles.iconRight}>

                </View>
                <View style={styles.boxImg}>
                    <Image style={styles.Img} />
                </View>
                <View>

                </View>
            </View>

            <View style={styles.category}>
                <View style={styles.iconLeft}>
                    <IconStyle name={'back'} />
                </View>
                <View style={styles.iconRight}>
                    <IconStyle name={'back'} />
                </View>
                <View style={styles.boxImg}>
                    <Image style={styles.Img} />
                </View>
                <View>

                </View>
            </View>
        </View>
    )
}

export default CategoryProduct