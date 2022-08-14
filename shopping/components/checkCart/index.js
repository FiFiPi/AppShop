import { View, Text, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import StepIndicator from 'react-native-step-indicator';
import { ProductList } from '../../components'
import { FormatPrice } from '../../help'
import { IMAGES } from '../../contains/images'
import styles from './styles'
const labels = ["Xác nhận", "Chuẩn bị", "Giao hàng", "Đã nhận"];
const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
}
const CheckCart = ({ items }) => {

    const [currentPosition, setCurrentPosition] = useState(2)
    const handleRender = ({ item }) => {
        let itemsNew = {
            sum: item.quantity,
            id: item.product_id
        }
        return <ProductList item={itemsNew} check />
    }
    return (
        <View style={styles.container}>
            <View style={styles.yourCart}>
                <Text style={styles.yourCartText}>Đơn hàng của bạn</Text>
                <FlatList
                    data={items}
                    renderItem={handleRender}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            <View style={styles.Cart}>
                <Text style={styles.textCart}>Tình trạng đơn hàng</Text>
                <StepIndicator
                    customStyles={customStyles}
                    currentPosition={currentPosition}
                    labels={labels}
                    stepCount={labels.length}
                />
            </View>
        </View>
    )
}

export default CheckCart