import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import IconStyle from '../icon'
import BoxSearch from '../boxSearch'
import { useRoute } from '@react-navigation/native'
import styles from './styles'

const HeaderNameScreen = () => {
    const route = useRoute()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <IconStyle name={'back'} />
                <Text numberOfLines={1} style={styles.title}>Danh mục {route.params.name}</Text>
                <IconStyle name={'sort'} />
            </View>
            <View style={styles.bottom}>
                <BoxSearch />
            </View>
        </SafeAreaView>
    )
}

export default HeaderNameScreen