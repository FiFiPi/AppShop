import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { IconStyle } from '../../components'
import BoxSearch from '../boxSearch'
import styles from './styles'

const Header = ({ icon, name }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const changePage = () => {
        if (searchQuery) {
            console.log('123')
        }
    }
    let iconRight = 'cart'
    switch (icon) {
        case 'sort':
            iconRight = 'sort'
            break;
        case 'delete':
            iconRight = 'delete'
            break
        default:
            break;
    }
    return (
        <SafeAreaView style={styles.header}>
            <View style={styles.iconHeader}>
                <IconStyle />
                <Text style={styles.textHeader}>{name}</Text>
                <IconStyle name={iconRight} />
            </View>
            <View style={styles.bottom}>
                <BoxSearch />
            </View>
        </SafeAreaView>
    )
}

export default Header
