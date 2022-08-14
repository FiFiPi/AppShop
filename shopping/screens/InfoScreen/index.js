import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import InfoList from '../../components/infoList'
import styles from './styles'

const InfoScreen = () => {
    const navigation = useNavigation()
    const goInfoShipScreen = () => {
        navigation.navigate('InfoShipScreen')
    }
    const goInfoCartScreen = () => {
        navigation.navigate('InfoCartScreen')
    }
    return (
        <View style={styles.container}>
            <InfoList name={'ship'} onPress={goInfoShipScreen} />
            <InfoList name={'cart'} onPress={goInfoCartScreen} />
        </View>
    )
}

export default InfoScreen
