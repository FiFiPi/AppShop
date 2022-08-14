import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


import styles from './styles'
const BoxSearch = () => {
    const route = useRoute()
    const [search, setSearch] = useState(route.params?.search || '');
    const navigation = useNavigation();

    const changePage = () => {
        if (route.params === 'SearchScreen') {
            navigation.setParams()
        }
        if (search) {
            navigation.navigate('SearchScreen', {
                search
            })
        }
    }
    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Tìm kiếm ... "
                onChangeText={(search) => setSearch(search)}
                value={search}
                containerStyle={styles.container}
                inputContainerStyle={styles.input}
                lightTheme
                onSubmitEditing={changePage}
            />
        </View>
    );
};
export default BoxSearch