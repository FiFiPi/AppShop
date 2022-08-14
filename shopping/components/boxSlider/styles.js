import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    pagination: {
        position: 'absolute',
        top: '75%'
    },
    slider: {
        width: '100%',
    },
    dotStyle: {
        width: 10,
        height: 10,
        marginHorizontal: 10,
        backgroundColor: 'gray'
    }

})

export default styles