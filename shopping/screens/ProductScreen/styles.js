import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    product: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'

    },
    viewImg: {
        flex: 1,
        width: '100%',
        height: '90%'
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    productContent: {
        flex: 2,
        margin: 15,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    name: {
        fontSize: 30,
        fontWeight: '600'
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        fontSize: 18,
        fontWeight: '200'
    },
    price: {
        color: 'red',
        fontSize: 20,
        fontWeight: '900',
        backgroundColor: '#ccf3e0',
        padding: 10
    },
    view: {
        flex: 3,
        paddingHorizontal: 10
    },
    add: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#cae6f3',
        height: 100,
        alignItems: 'center'
    },
    textAdd: {
        fontSize: 25,
    },
    buy: {
        backgroundColor: '#02a0c5',
        borderRadius: 20,
        padding: 15
    },
    priceBuy: {
        fontWeight: '700',
        fontSize: 18
    },
    viewInfo: {
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    content: {
        fontWeight: '200'
    },
    viewAmount: {
        marginBottom: 10
    },


})
export default styles