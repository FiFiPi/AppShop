import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, Image, FlatList } from 'react-native'
import { IMAGES } from '../../contains'
import Product from '../../components/product'
import { IconStyle, BoxSearch } from '../../components'
import { Searchbar } from 'react-native-paper';
import BoxSlider from '../../components/boxSlider'
import CategoryProduct from '../../components/categoryProduct'
import { useRoute } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategoriesInProduct } from '../../store/slices/categories'
import styles from './styles'

// const items = [
//     {
//         name: 'samsung',
//         img: IMAGES.s22,
//         price: 22790000,
//         oldPrice: 28000000,
//         star: 4,
//         content: '8GB/128GB'
//     },
//     {
//         name: 'samsung1',
//         img: IMAGES.s22,
//         price: 22790000,
//         oldPrice: 28000000,
//         star: 4,
//         content: '8GB/128GB'
//     },
//     {
//         name: 'samsung2',
//         img: IMAGES.s22,
//         price: 22790000,
//         oldPrice: 28000000,
//         star: 4,
//         content: '8GB/128GB'
//     },
//     {
//         name: 'samsung3',
//         img: IMAGES.s22,
//         price: 22790000,
//         oldPrice: 28000000,
//         star: 4,
//         content: '8GB/128GB'
//     },
// ]
const CategoryScreen = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.Category.products)
    const route = useRoute()
    const { id } = route.params
    const itemsFilter = useSelector(state => state.Filter.items)
    useEffect(() => {
        let max_price = itemsFilter.toValue
        let min_price = itemsFilter.fromValue
        let sortBy, order
        switch (itemsFilter?.active) {
            case 'Mới nhất':
                sortBy = 'id',
                    order = 'asc'
                break;
            case 'Cũ nhất':
                sortBy = 'id',
                    order = 'desc'
                break;
            case 'Giá tăng':
                sortBy = 'price',
                    order = 'asc'
                break
            case 'Giá giảm':
                sortBy = 'price',
                    order = 'desc'
                break
            case 'Khuyến mãi':
                sortBy = 'price_sale_off',
                    order = 'desc'
                break
            default:
                break;
        }
        dispatch(fetchCategoriesInProduct({ id, max_price, min_price, sortBy, order }))
    }, [itemsFilter])

    console.log(items)
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

export default CategoryScreen
