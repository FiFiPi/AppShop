import { View, Text, FlatList, Image, ScrollView, TouchableOpacity, VirtualizedList, Alert } from 'react-native'
import { IMAGES, COLORS, MESSAGE } from '../../contains'
import { FormatPrice } from '../../help'
import ShowToast from '../../help/ShowToast'
import { COMMENT, RatingComponent, ProductHorizonal, Quantify } from '../../components'
import { useRoute } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { fetchSingleProduct } from '../../store/slices/product'
import { AddCart } from '../../store/slices/cart'
import { fetchCategoriesInProduct } from '../../store/slices/categories'
import styles from './styles'
// const items = [
//     {
//         name: 'name1',
//         price: 23000000,
//         oldPrice: 28000000,
//         img: IMAGES.s22,
//         star: 4,
//         content: '8GB/128GB'
//     },
//     {
//         name: 'name2',
//         price: 23000000,
//         oldPrice: 28000000,
//         img: IMAGES.s22,
//         star: 4,
//         content: '8GB/128GB'
//     },
//     {
//         name: 'name3',
//         price: 23000000,
//         oldPrice: 28000000,
//         img: IMAGES.s22,
//         star: 4,
//         content: '8GB/128GB'
//     },
//     {
//         name: 'name4',
//         price: 23000000,
//         oldPrice: 28000000,
//         img: IMAGES.s22,
//         star: 4,
//         content: '8GB/128GB'
//     },
// ]
const ProductScreen = () => {
    const route = useRoute()
    const dispatch = useDispatch()
    const product = useSelector(state => state.Product.product)
    const productInCategory = useSelector(state => state.Category.products)
    const [loading, setLoading] = useState(false)
    const [number, setNumber] = useState(1)
    const { id } = route.params

    useEffect(() => {
        dispatch(fetchSingleProduct({ id }))
            .then(res => {
                if (!res.error) {
                    dispatch(fetchCategoriesInProduct({ id: res.payload.category_id, limit: 8 }))
                        .then(res => {
                            if (!res.error) {
                                setLoading(true)
                                setNumber(1)
                            }
                        })

                } else {
                    setLoading(false)
                    Alert.alert('Thông báo!', 'Sản phẩm không tồn tại.')
                }
            })
    }, [route])

    const showItems = ({ item }) => {
        return (
            <ProductHorizonal data={item} />
        )
    }
    const handleChangeNumber = (val) => {
        setNumber(val)
    }
    const handleAddCart = () => {
        dispatch(AddCart({ id, sum: number }))
        setNumber(1)
        ShowToast(MESSAGE.addCart)
    }
    return (
        <>
            {loading && (
                <>
                    <ScrollView style={styles.container}>
                        <View style={styles.product}>
                            <View style={styles.viewImg}>
                                <Image style={styles.img} source={{ uri: product.image }} />
                            </View>
                            <View style={styles.productContent}>
                                <View><Text numberOfLines={1} style={styles.name}>{product.name}</Text></View>
                                <View><RatingComponent product /></View>
                                <View><Text style={styles.oldPrice}>{FormatPrice(product.price)}</Text></View>
                                <View><Text style={styles.price}>{FormatPrice(product.price_sale_off)}</Text></View>
                            </View>
                        </View>
                        <View style={styles.view}>
                            <View style={styles.viewInfo}>
                                <Text style={styles.title}>Thông tin sản phẩm</Text>
                                <Text style={styles.content}>{product.description}</Text>
                            </View>

                            <View style={styles.viewAmount}>
                                <Text style={styles.title}>Số lượng</Text>
                                <Quantify handleChangeNumber={(val) => handleChangeNumber(val)} quantify={number} />
                            </View>
                            <View>
                                <Text style={styles.title}>Sản phẩm liên quan</Text>
                                <View>
                                    <FlatList
                                        data={productInCategory}
                                        renderItem={showItems}
                                        keyExtractor={(item) => item.name.toString()}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}
                                    />
                                </View>
                            </View>
                            <View>
                                <COMMENT />
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.add}>
                        <Text style={styles.textAdd}>{number}</Text>
                        <TouchableOpacity style={styles.buy} onPress={handleAddCart}>
                            <Text style={styles.textBuy}>Thêm vào giỏ hàng</Text>
                            <Text style={styles.priceBuy}>{FormatPrice(number * product.price_sale_off)}</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </>
    )
}

export default ProductScreen