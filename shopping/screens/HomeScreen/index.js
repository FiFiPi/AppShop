import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import BoxSlider from '../../components/boxSlider'
import Category from '../../components/category'
import CategorySpecial from '../../components/categorySpecial'
import { useSelector } from 'react-redux'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './styles'

const HomeScreen = () => {
    const token = useSelector(state => state.Auth.token)
    useEffect(() => {
        const setHeader = async () => {
            try {
                let token = await AsyncStorage.getItem('access_token')
                console.log(token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            } catch (e) {
                console.log(e)
            }
        }
        setHeader()
    }, [token])
    return (
        <View style={styles.container}>
            <ScrollView style={styles.header} showsVerticalScrollIndicator={false}>
                <BoxSlider />
                <View style={styles.body}>
                    <Category />
                    <CategorySpecial nameCategory={"Sản phẩm mới"} />
                    <CategorySpecial nameCategory={"Sản phẩm bán chạy"} />
                </View>
            </ScrollView>
        </View>
    )
}
export default HomeScreen
