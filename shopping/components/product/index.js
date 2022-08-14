import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FormatPrice, SalePercent } from '../../help'
import { useNavigation } from '@react-navigation/native';
import IconHeart from '../iconHeart'
import Ionicons from "@expo/vector-icons/Ionicons";
import { IMAGES } from '../../contains'
import React, { useState, useEffect } from 'react'
import { Favorite } from '../../store/slices/favorite'
import { AddCart } from '../../store/slices/cart'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles'

const Product = ({ data, sale = true }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [heart, setHeart] = useState(false)

    const favoriteData = useSelector(state => state.Favorite.items)
    useEffect(() => {
        favoriteData.indexOf(data.id) !== -1 ? setHeart(true) : setHeart(false)
    }, [favoriteData])


    const onHeart = () => {
        return (
            setHeart(!heart),
            dispatch(Favorite({ id: data.id }))
        )
    }
    const showProduct = () => {
        return (
            navigation.navigate('ProductScreen', {
                id: data.id
            })
        )
    }
    const handleCart = () => {
        dispatch(AddCart({ id: data.id }))
    }
    return (
        <TouchableOpacity onPress={showProduct} style={styles.container}>
            <View style={styles.box}>
                <View style={styles.boxImage}>
                    <Image style={styles.Img} source={{ uri: data.image }} />
                </View>
                <View style={styles.titleCategory}>
                    <Text numberOfLines={1} style={styles.name}>{data.name}</Text>
                    <Text numberOfLines={1} style={styles.content}>{data.summary}</Text>
                    {
                        sale && (<Text style={styles.oldPrice}>{FormatPrice(data.price)}</Text>)
                    }
                    <Text numberOfLines={1} style={styles.price}>{FormatPrice(data.price_sale_off)}</Text>
                    <View style={styles.iconLike}>
                        <TouchableOpacity onPress={onHeart}>
                            <IconHeart heart={heart} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.iconShopping} onPress={handleCart}>
                        <Ionicons name={'ios-cart'} size={30} color={'red'} />
                    </TouchableOpacity>
                    {
                        sale && (
                            <View style={styles.sale}>
                                <Image style={styles.imgSale} source={IMAGES.sale} />
                                <Text numberOfLines={1} style={styles.salePrice}>{SalePercent(data.price_sale_off, data.price)}</Text>
                                <Text style={styles.saleOf}>GIẢM GIÁ</Text>
                            </View>
                        )
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Product