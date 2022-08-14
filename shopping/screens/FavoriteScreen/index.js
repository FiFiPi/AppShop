import React, { useState, useEffect } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Product from '../../components/product'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles'


// const items = [
//     {
//         name: 's22 ultra',
//         img: IMAGES.s22,
//         content: '6GB/256GB',
//         star: 4,
//         price: 24000000,
//         oldPrice: 28999000
//     },
//     {
//         name: 's2 ultra',
//         img: IMAGES.s22,
//         content: '6GB/256GB',
//         star: 4,
//         price: 24000000,
//         oldPrice: 28999000
//     },
//     {
//         name: 's22',
//         img: IMAGES.s22,
//         content: '6GB/256GB',
//         star: 4,
//         price: 24000000,
//         oldPrice: 28999000
//     },
//     {
//         name: 's22 ulra',
//         img: IMAGES.s22,
//         content: '6GB/256GB',
//         star: 4,
//         price: 24000000,
//         oldPrice: 28999000
//     },
//     {
//         name: 's22 ul',
//         img: IMAGES.s22,
//         content: '6GB/256GB',
//         star: 4,
//         price: 24000000,
//         oldPrice: 28999000
//     },
//     {
//         name: 's22 ua',
//         img: IMAGES.s22,
//         content: '6GB/256GB',
//         star: 4,
//         price: 24000000,
//         oldPrice: 28999000
//     },
// ]
const FavoriteScreen = () => {
    const product = useSelector(state => state.Product.items)
    const favoriteData = useSelector(state => state.Favorite.items)
    const [items, setItems] = useState([])
    useEffect(() => {
        let itemsFavorite = product.filter(item => favoriteData.indexOf(item.id) !== -1)
        setItems(itemsFavorite)
    }, [favoriteData])

    const showItems = ({ item }) => {
        return (
            <Product data={item} />
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={showItems}
                keyExtractor={(item) => item.name.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default FavoriteScreen
