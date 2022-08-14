import { View, Text, Image } from 'react-native'
import { IMAGES } from '../../contains'
import React from 'react'
import styles from './styles'
const ProductHot = () => {
    return (
        <View style={styles.box}>
            <View style={styles.boxImage}>
                <Image style={styles.Img} source={IMAGES.s22} />
            </View>
            <View style={styles.boxProduct}>
                <Text style={[styles.textProduct, styles.name]}>SS S22 Ultra</Text>
                <Text style={[styles.textProduct]}>12GB - 256GB</Text>
                <Text style={[styles.textProduct]}>ICON</Text>
                <Text style={[styles.textProduct, styles.price]}>29.990.000 đ</Text>
            </View>
        </View>
    )
}

export default ProductHot