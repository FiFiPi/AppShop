import { View, Text, TouchableOpacity } from 'react-native'
import InputStyle from '../../components/inputStyle'
import { CheckLogin } from '../../common'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncGetMe, fetchAsyncUpdate } from '../../store/slices/user'
import ShowToast from '../../help/ShowToast'
import { MESSAGE } from '../../contains/default'
import styles from './styles'

const InfoShipScreen = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.Auth.isLogin)
    const [nickname, setNickname] = useState('')
    const [loading, setLoading] = useState(true)

    const [objInfo, setObjInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })
    console.log('objjjjj', objInfo)
    const [isUpdate, setisUpdate] = useState(true)
    useEffect(() => {
        setLoading(true)
        dispatch(fetchAsyncGetMe())
            .then((res) => {
                if (!res.error) {
                    setLoading(false)
                    setObjInfo({
                        ...objInfo,
                        name: res.payload.name,
                        email: res.payload.email,
                        phone: res.payload.phone,
                        address: res.payload.address
                    })
                }
            })
    }, [isUpdate])
    const handleUpdate = () => {
        dispatch(fetchAsyncUpdate(objInfo))
            .then((res) => {
                if (!res.error) {
                    ShowToast(MESSAGE.update)
                    setisUpdate(!isUpdate)
                }
            })
    }
    return (
        <>
            {isLogin ? (
                <View style={styles.container}>
                    <InputStyle name={'Họ và tên'} value={objInfo.name} onChange={(value) => setNickname({ ...objInfo, name: value })} />
                    <InputStyle name={'Email'} value={objInfo.email} onChange={(value) => setNickname({ ...objInfo, email: value })} />
                    <InputStyle name={'Số điện thoại'} value={objInfo.phone} onChange={(value) => setNickname({ ...objInfo, phone: value })} />
                    <InputStyle name={'Địa chỉ'} value={objInfo.address} onChange={(value) => setNickname({ ...objInfo, address: value })} />
                    <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                        <Text style={styles.text}>Cập nhật lại thông tin</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <CheckLogin />
            )
            }
        </>
    )
}
export default InfoShipScreen