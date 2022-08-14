import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { COLORS } from '../../contains'
import { AntDesign, Entypo, MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { RemoveFavorite } from '../../store/slices/favorite'

import styles from './styles'
const IconStyle = ({ name = 'menu', product = false, right = true }) => {
    let icon = '', styleCustom;
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const favoriteData = useSelector(state => state.Favorite.items)

    const openDrawer = () => {
        navigation.openDrawer()
    }
    const openCart = () => {
        navigation.navigate('CartScreen')
    }
    const goBackHome = () => {
        navigation.goBack()
    }
    const goFillter = () => {
        navigation.navigate('FillterScreen')
    }
    const goDelete = () => {
        if (favoriteData.length !== 0) {
            Alert.alert(
                "Thông báo!",
                "Bạn có chắc chắn muốn xoá tất cả ?",
                [
                    {
                        text: "Huỷ bỏ",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => dispatch(RemoveFavorite()) }
                ]
            );
        } else {
            Alert.alert('Thông báo!', 'Chưa có sản phẩm yêu thích !')
        }


    }
    switch (name) {
        case 'edit':
            icon = <Entypo name="edit" size={18} color={COLORS.white} />
            break;
        case 'logout':
            icon = <MaterialCommunityIcons name="logout" size={26} color={COLORS.white} />
            break
        case 'home':
            styleCustom = { ...style.container }
            icon = <AntDesign name="home" size={24} color={COLORS.white} />
            break
        case 'info':
            styleCustom = { ...style.container }
            icon = <AntDesign name="infocirlceo" size={24} color={COLORS.white} />
            break
        case 'userInRoom':
            styleCustom = { ...style.container }
            icon = <AntDesign name="team" size={24} color={COLORS.white} />
            break
        case 'eye-slash':
        case 'eye':
            icon = <FontAwesome name="eye" size={15} color={COLORS.grey} />
            break
        case 'menu':
            icon = (
                <TouchableOpacity onPress={openDrawer} style={styles.container} >
                    <Feather name="menu" size={24} color="red" style={styles.menu} />
                </TouchableOpacity>
            )
            break
        case 'cart':
            icon = (
                <TouchableOpacity onPress={openCart} style={styles.shoppingcart} >
                    < AntDesign name="shoppingcart" size={30} color={(product ? 'red' : 'red')} />
                </TouchableOpacity>
            )
            break
        case 'back':
            icon = (
                <TouchableOpacity onPress={goBackHome} style={styles.container}>
                    <Entypo name="back" size={30} color={('red')} style={styles.back} />
                </TouchableOpacity>
            )
            break
        case 'sort':
            icon = (
                <TouchableOpacity onPress={goFillter} style={styles.container}>
                    <AntDesign name="filter" size={30} color={(product ? COLORS.backgroundChat : 'red')} style={styles.filter} />
                </TouchableOpacity>
            )
            break
        case 'delete':
            icon = (
                <TouchableOpacity onPress={goDelete} style={styles.container}>
                    <FontAwesome name="trash-o" size={32} color="red" style={styles.delete} />
                </TouchableOpacity>
            )
            break
        default:
            break;
    }

    return (
        icon
    )
}
// style={{ ...styleCustom }}
export default IconStyle
