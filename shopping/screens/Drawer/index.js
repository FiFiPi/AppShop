import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { IMAGES } from '../../contains/images'
import React, { useState } from 'react'
import { Drawer } from 'react-native-paper';
import { DrawerItemComponent } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import styles from './styles'

const DrawerContent = () => {
    const isLogin = useSelector(state => state.Auth.isLogin)
    console.log(isLogin)
    const navigation = useNavigation()
    const [active, setActive] = useState('Home')
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerBox}>
                    <Image style={styles.img} source={IMAGES.backg} />
                </View>
                <Text style={styles.headerTitle}>SHOP</Text>
            </View>
            <DrawerContentScrollView style={styles.body}>
                <DrawerItemComponent name={'Home'} setActive={(value) => setActive(value)} active={active} />
                <DrawerItemComponent name={'Category'} setActive={(value) => setActive(value)} active={active} />
                <DrawerItemComponent name={'CartScreen'} setActive={(value) => setActive(value)} active={active} />
                <DrawerItemComponent name={'Info'} setActive={(value) => setActive(value)} active={active} />
                {
                    !isLogin ? (
                        <DrawerItemComponent name={'Login'} setActive={(value) => setActive()} active={active} />
                    ) : (
                        <DrawerItemComponent name={'Logout'} setActive={(value) => setActive()} active={active} />
                    )
                }
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <Text style={styles.bottomDrawerSectionText}>ShopOnline@</Text>
            </Drawer.Section>
        </View>
    )
}
export default DrawerContent
