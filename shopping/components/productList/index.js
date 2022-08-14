import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { IMAGES, MESSAGE } from '../../contains'
import { FormatPrice } from '../../help'
import IconHeart from '../iconHeart'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSingleProduct } from '../../store/slices/product'
import { RemoveCart, AddCart } from '../../store/slices/cart'
import Quantify from '../../components/quantify'
import React, { useState, useEffect } from 'react'
import ShowToast from '../../help/ShowToast'
import styles from './styles'

const ProductList = ({ cart, item, check }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const [number, setNumber] = useState(item?.sum || 1)
    const [heart, setHeart] = useState(false)
    const navigation = useNavigation()

    useEffect(() => {
        setLoading(true)
        dispatch(fetchSingleProduct({ id: item?.id, name: 'product' }))
            .then(res => {
                if (!res.error) {
                    setData(res.payload)
                    setLoading(false)
                    if (!check) {
                        dispatch(AddCart({ id: item?.id, total: number * res.payload.price_sale_off, update: true, sumUpdate: item?.sum }))
                    }
                }
            })
    }, [])
    const showProduct = () => {
        navigation.navigate('ProductScreen', {
            id: item?.id,

        })
    }

    const onHeart = () => {
        setHeart(!heart)
    }

    const handleChangeNumber = (val) => {

        val === 0 ? dispatch(RemoveCart({ id: item?.id })) : dispatch(AddCart({ id: item?.id, update: val, sumUpdate: val, total: val * data.price_sale_off }))
        setNumber(val)
        ShowToast(MESSAGE.update)
    }

    if (loading) {
        return <></>
    }

    return (
        <TouchableOpacity style={styles.container} onPress={showProduct}>
            <View style={styles.box}>
                {/* <View style={styles.icon}>
                    <TouchableOpacity onPress={onHeart}>
                        <IconHeart heart={'heart'} />
                    </TouchableOpacity>
                </View> */}
                <Image source={{ uri: data.image }} style={styles.img} />
            </View>

            <View style={styles.content} >
                <View style={styles.info}>
                    <Text numberOfLines={1} style={styles.name}>{data.name}</Text>
                    <Text numberOfLines={1} style={styles.ram}>{data.description}</Text>
                    {
                        !cart && (
                            console.log(number),
                            <Text numberOfLines={1}>Số lượng:{number}</Text>
                        )
                    }
                    <Text numberOfLines={1} style={styles.price}>{cart ? FormatPrice(number * data.price_sale_off) : FormatPrice(data.price_sale_off)}</Text>
                </View>
                {
                    cart && (
                        <Quantify quantify={number} handleChangeNumber={(val) => handleChangeNumber(val)} small />
                    )
                }
            </View>
        </TouchableOpacity>
    )
}

export default ProductList