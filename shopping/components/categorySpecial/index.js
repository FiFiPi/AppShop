import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { IMAGES } from '../../contains'
import { FormatPrice } from '../../help'
import RatingComponent from '../rating'
import React, { useState, useEffect } from 'react'
import { fetchProduct } from '../../store/slices/product'
import styles from './styles'

// const items = [
//     {
//         name: 's22 ultra',
//         img: IMAGES.s22,
//         price: 24990000,
//         oldPrice: 28990000,
//         start: 3,
//         content: '6GB/128GB'
//     },
//     {
//         name: 's22',
//         img: IMAGES.s22,
//         price: 24990000,
//         oldPrice: 28990000,
//         start: 3,
//         content: '6GB/128GB'
//     },
//     {
//         name: 's222',
//         img: IMAGES.s22,
//         price: 24990000,
//         oldPrice: 28990000,
//         start: 3,
//         content: '6GB/128GB'
//     },
//     {
//         name: 's22 old',
//         img: IMAGES.s22,
//         price: 24990000,
//         oldPrice: 28990000,
//         start: 3,
//         content: '6GB/128GB'
//     },
//     {
//         name: 's22 new',
//         img: IMAGES.s22,
//         price: 24990000,
//         oldPrice: 28990000,
//         start: 3,
//         content: '6GB/128GB'
//     },
//     {
//         name: 's22 amoled',
//         img: IMAGES.s22,
//         price: 24990000,
//         oldPrice: 28990000,
//         start: 3,
//         content: '6GB/128GB'
//     },
// ]
const CategorySpecial = ({ nameCategory }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        let result
        switch (nameCategory) {
            case 'Sản phẩm mới':
                result = dispatch(fetchProduct({ special: true, name: 'itemsSpec' }))
                break;
            case 'Sản phẩm bán chạy':
                result = dispatch(fetchProduct({ is_new: true, name: 'itemsNew' }))
                break
            default:
                break;
        }
        result.then(res => {

            if (!res.error) {
                setItems(res.payload.data)
                setLoading(false)
            }
        })
    }, [])

    const goProduct = (id) => {
        navigation.navigate('ProductScreen', {
            id: id
        })
    }
    const showItems = ({ item }) => {
        return (
            <TouchableOpacity style={styles.box} onPress={() => goProduct(item.id)}>
                <View style={styles.boxCategory}>
                    <Image style={styles.img} source={{ uri: item.image }} />
                </View>
                <View style={styles.info}>
                    <Text numberOfLines={1} style={styles.infoName}>{item.name}</Text>
                    <Text numberOfLines={1}>{item.summary}</Text>
                    <Text numberOfLines={1}><RatingComponent /></Text>
                    <Text numberOfLines={1} style={styles.infoPrice}>{FormatPrice(item.price)}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{nameCategory}</Text>
            </View>
            <FlatList
                data={items}
                renderItem={showItems}
                keyExtractor={(item) => item.name.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                maxToRenderPerBatch={items.length}
            />
        </View>
    )
}
export default CategorySpecial