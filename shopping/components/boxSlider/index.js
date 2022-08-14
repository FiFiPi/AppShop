import React, { useState, useEffect } from 'react'
import { View, Image } from 'react-native'
import { IMAGES } from '../../contains'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useSelector, useDispatch } from 'react-redux'
import { fetchSlider } from '../../store/slices/slider'
import styles from './styles'

const BoxSlider = () => {
    const dispatch = useDispatch()
    const [entries, setEntries] = useState(dataSlider ? dataSlider.length : 0)
    const [activeSlide, setActiveSlide] = useState(0)
    const dataSlider = useSelector(state => state.Slider.items)

    useEffect(() => {
        dispatch(fetchSlider())
    }, [])

    const renderItems = (item) => {
        //   console.log(item)
        return (
            <View style={styles.slider}>
                <Image style={styles.img} source={{ uri: item.item.image }} />
            </View>
        )
    }
    const pagination = () => {
        return (
            <Pagination
                dotsLength={entries}
                activeDotIndex={activeSlide}
                containerStyle={styles.PagiContainer}
                dotStyle={styles.dotStyle}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        )
    }
    return (
        <View style={styles.container}>
            <Carousel
                data={dataSlider}
                renderItem={renderItems}
                sliderWidth={350}
                itemWidth={350}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            <View style={styles.pagination}>
                {pagination()}
            </View>
        </View>
    )
}
export default BoxSlider
import { LogBox } from "react-native";

LogBox.ignoreLogs([
    "exported from 'deprecated-react-native-prop-types'.",
])