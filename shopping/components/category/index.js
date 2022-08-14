import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { IMAGES } from '../../contains'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories } from '../../store/slices/categories'

// const items = [
//     { name: 'Sam1', img: IMAGES.s22 },
//     { name: 'Samsung2', img: IMAGES.s22 },
//     { name: 'Samsung3', img: IMAGES.s22 },
//     { name: 'Samsung4', img: IMAGES.s22 },
//     { name: 'Samsung5', img: IMAGES.s22 },
//     { name: 'Samsung6', img: IMAGES.s22 }
// ]

const Category = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const items = useSelector(state => state.Category.items)
    const navigation = useNavigation()

    useEffect(() => {
        dispatch(fetchCategories())
            .then(res => {
                if (!res.error) {
                    setLoading(false)
                }
            })
    }, [])

    const showProduct = (item) => {
        navigation.navigate('CategoryScreen', {
            id: item.id,
            name: item.name
        })
    }
    const showItems = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => showProduct(item)} style={styles.box}>
                <View style={styles.boxCategory}>
                    <Image style={styles.img} source={{ uri: item.image }} />
                </View>
                <Text style={styles.titleCategory}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleLeft}>Danh mục sản phẩm</Text>
                <Text style={styles.titleRight}>Tất cả( 20 )</Text>
            </View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.name.toString()}
                renderItem={showItems}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Category