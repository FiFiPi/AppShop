import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../contains'
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width: 195,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 5,
        height: 250
    },
    box: {
        backgroundColor: 'gray',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.41,
        shadowRadius: 3.11,
        elevation: 4,
    },
    boxImage: {
        height: '65%',
        width: '100%',
    },
    Img: {
        width: '100%',
        height: '85%',
        borderRadius: 5,
        resizeMode: 'contain'
    },
    titleCategory: {
        height: '35%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 3,
        width: '100%'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15
    },
    content: {
        fontWeight: '200'
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        color: 'black'
    },
    price: {
        color: COLORS.red,
        fontWeight: '800'
    },
    iconLike: {
        position: 'absolute',
        width: 40,
        height: 40,
        bottom: 205,
        left: -5
    },
    iconShopping: {
        position: 'absolute',
        width: 40,
        height: 40,
        right: 0,
        bottom: 0
    },
    sale: {
        position: 'absolute',
        right: 0,
        bottom: 185,
        width: 35,
        height: 55
    },
    saleOf: {
        fontSize: 6,
        fontWeight: 'bold',
        position: 'absolute',
        top: 14,
        left: 3
    },
    salePrice: {
        fontWeight: '600',
        color: COLORS.red,
        fontSize: 12,
        position: 'absolute',
        left: 7
    }

})

export default styles