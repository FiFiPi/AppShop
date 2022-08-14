import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import ButtonFilter from '../../components/buttonFilter'
import RangeSlider, { Slider } from 'react-native-range-slider-expo';
import { Filter } from '../../store/slices/filter'
import { useSelector, useDispatch } from 'react-redux'
import { FormatPrice } from '../../help'
import styles from './styles'

const FillterScreen = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.Filter.items)
    const navigation = useNavigation()
    const [fromValue, setFromValue] = useState(items.fromValue);
    const [toValue, setToValue] = useState(items.toValue);
    const [active, setActive] = useState(items.active)
    const activeButton = (title) => {
        setActive(title)
    }

    const apply = () => {
        dispatch(Filter({ active, fromValue, toValue }))
        navigation.goBack()
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.product}>
                    <Text style={styles.title}>Lọc theo sản phẩm</Text>
                    <View style={styles.fillProduct}>
                        <View style={styles.box}>
                            <ButtonFilter active={active} onPress={activeButton} title={'Mới nhất'} />
                            <ButtonFilter active={active} onPress={activeButton} title={'Giá giảm'} />
                            <ButtonFilter active={active} onPress={activeButton} title={'Giá tăng'} />
                        </View>
                        <View style={styles.box}>
                            <ButtonFilter active={active} onPress={activeButton} title={'Cũ nhất'} />
                            <ButtonFilter active={active} onPress={activeButton} title={'Khuyến mãi'} />
                        </View>
                    </View>
                </View>
                <View style={styles.price}>
                    <Text style={styles.title}>Lọc theo giá</Text>
                    <View style={styles.boxPrice}>
                        <Text style={styles.textPrice}>Giá từ : {FormatPrice(fromValue)}</Text>
                        <Text style={styles.textPrice}>Giá đến: {FormatPrice(toValue)}</Text>
                    </View>
                </View>
                <RangeSlider min={0} max={40000000}
                    fromValueOnChange={value => setFromValue(value)}
                    toValueOnChange={value => setToValue(value)}
                    initialFromValue={fromValue}
                    initialToValue={toValue}
                />
                <View style={styles.apply}>
                    <TouchableOpacity onPress={apply} style={styles.button}>
                        <Text style={styles.buttonText}>Áp dụng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
export default FillterScreen