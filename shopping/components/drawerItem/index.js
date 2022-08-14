import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { DrawerItem } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux'
import { Logout } from '../../store/slices/auth'
const DrawerItemComponent = ({ name, active, setActive }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()

    let icon, label;
    switch (name) {
        case 'Home':
            icon = 'ios-home-outline'
            label = 'Trang chủ'
            break;
        case 'Category':
            icon = 'ios-briefcase-outline'
            label = 'Danh mục sản phẩm'
            break;
        case 'CartScreen':
            icon = 'ios-cart-outline'
            label = 'Thông tin đơn hàng'
            break;
        case 'Info':
            icon = 'ios-person-outline'
            label = 'Thông tin cá nhân'
            break;
        case 'Logout':
            icon = 'ios-log-out-outline'
            label = 'Đăng xuất'
            break;
        case 'Login':
            icon = "ios-log-out-outline"
            label = 'Đăng nhập'
            break;

        default:
            break;
    }
    const handleLogout = () => {
        dispatch(Logout())
    }
    return (
        <DrawerItem
            focused={active == name ? true : false}
            activeTintColor='yellow'
            icon={({ color, size }) => (
                <Ionicons name={icon} size={size} color={color} />
            )}
            label={label}
            onPress={() => {
                setActive(name)
                {
                    name == 'Logout' ? (
                        handleLogout()
                    ) : (navigation.navigate(name))
                }
            }}
        />
    )
}

export default DrawerItemComponent