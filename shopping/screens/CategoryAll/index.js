import { View, Text, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BoxSlider } from '../../components'
import { IMAGES } from '../../contains'
import Product from '../../components/product'
import { fetchProduct } from '../../store/slices/product'
import styles from './styles'
// const items = [
//     {
//         name: 'name1',
//         img: IMAGES.s22,
//         price: 24000000,
//         oldPrice: 28000000,
//         star: 3,
//         content: '6GB/256GB'
//     },
//     {
//         name: 'name2',
//         img: IMAGES.s22,
//         price: 24000000,
//         oldPrice: 28000000,
//         star: 3,
//         content: '6GB/256GB'
//     },
//     {
//         name: 'name3',
//         img: IMAGES.s22,
//         price: 24000000,
//         oldPrice: 28000000,
//         star: 3,
//         content: '6GB/256GB'
//     },
//     {
//         name: 'name4',
//         img: IMAGES.s22,
//         price: 24000000,
//         oldPrice: 28000000,
//         star: 3,
//         content: '6GB/256GB'
//     },
// ]
const CategoryAllScreen = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.Product.items)
    const itemsFilter = useSelector(state => state.Filter.items)

    useEffect(() => {
        let max_price = itemsFilter.toValue
        let min_price = itemsFilter.fromValue
        let sortBy, order
        switch (itemsFilter?.active) {
            case 'Mới nhất':
                sortBy = 'id'
                order = 'asc'
                break;
            case 'Cũ nhất':
                sortBy = 'id'
                order = 'desc'
                break;
            case 'Giá tăng':
                sortBy = 'price'
                order = 'asc'
                break;
            case 'Giá giảm':
                sortBy = 'price'
                order = 'desc'
                break
            case 'Khuyến mãi':
                sortBy = 'price_sale_off'
                order = 'desc'
                break;
            default:
                break;
        }
        dispatch(fetchProduct({ max_price, min_price, sortBy, order, name: 'items' }))
    }, [itemsFilter])
    const showItems = ({ item }) => {
        return (
            <Product data={item} />
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.aside}>
                <FlatList
                    renderItem={showItems}
                    data={items}
                    keyExtractor={(item) => item.name.toString()}
                    numColumns={2}
                    nestedScrollEnabled={true}
                    ListHeaderComponent={<BoxSlider />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}
export default CategoryAllScreen