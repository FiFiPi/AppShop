import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { IMAGES } from '../../contains/images'
import Product from '../../components/product'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles'
import { useRoute } from '@react-navigation/native'
import { fetchProduct } from '../../store/slices/product'
import HighlightText from '@sanar/react-native-highlight-text';


const SearchScreen = () => {
    const dispatch = useDispatch()
    const route = useRoute()
    const { search } = route.params
    const [items, setItems] = useState({})
    useEffect(() => {
        dispatch(fetchProduct({ search }))
            .then(res => {
                if (!res.error) {

                    setItems(res.payload.data)
                }
            })
    }, [search])

    const hightlightName = (string) => {
        return (
            <HighlightText
                highlightStyle={{ backgroundColor: 'grey' }}
                searchWords={[search]}
                textToHighlight={string}
            />
        )
    }

    const showItems = ({ item }) => {
        let product = {
            ...item,
            name: hightlightName(item.name)
        }
        return (
            <Product data={product} />
        )
    }
    return (
        <>
            {
                items.length > 0 ? (
                    <View style={styles.container}>
                        <FlatList
                            data={items}
                            renderItem={showItems}
                            keyExtractor={(item) => item.name.toString()}
                            numColumns={2}
                        />
                    </View>
                ) : (
                    <Text>no Data</Text>
                )
            }
        </>

    )
}

export default SearchScreen