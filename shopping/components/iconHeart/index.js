import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";

const IconHeart = ({ heart }) => {
    let iconName = heart ? 'ios-heart' : 'ios-heart-outline'
    return (
        <Ionicons name={iconName} color={'red'} size={32}></Ionicons>
    )
}

export default IconHeart