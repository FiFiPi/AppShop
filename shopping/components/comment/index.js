import { View, Text, Image, FlatList, LogBox } from 'react-native'
import { IMAGES } from '../../contains'
import React, { useEffect } from 'react'
import styles from './styles'

const comment = [
    {
        name: "user1",
        avatar: IMAGES.avt,
        data: 'good'
    },
    {
        name: 'user2',
        avatar: IMAGES.avt,
        data: 'great'
    }
]
const COMMENT = () => {
    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    }, [])

    const showItems = ({ item }) => {
        return (
            <View style={styles.comment}>
                <View style={styles.viewImg}>
                    <Image style={styles.img} source={item.avatar} />
                </View>
                <View style={styles.viewContent}>
                    <Text style={styles.user}>{item.name}</Text>
                    <Text style={styles.content}>{item.data}</Text>
                </View>
            </View>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Đánh giá sản phẩm</Text>
                <FlatList
                    data={comment}
                    renderItem={showItems}
                    keyExtractor={(item) => item.name.toString()}
                />
            </View>
        </>

    )
}

export default COMMENT