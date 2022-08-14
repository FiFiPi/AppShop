import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const Width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    box: {
        width: Width / 2,
        height: 100,
        marginTop: 20,
        alignItems: 'center',
        margin: 15,
        flexDirection: 'row',
        flex: 1

    },
    boxImage: {
        height: 100,
        width: '55%'
    },
    Img: {
        width: '100%',
        height: '100%',
        borderRadius: 2,
    },
    boxProduct: {
        justifyContent: 'center',

    },
    textProduct: {

        margin: 3
    },
    name: {
        fontWeight: 'bold',
    },
    price: {
        color: 'red',
        fontWeight: 'bold'
    }
})

export default styles