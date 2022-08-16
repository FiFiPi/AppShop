import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    title: {
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginLeft: 20
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    box: {
        flexDirection: 'row',
        marginRight: 1,
    },
    boxCategory: {
        width: 100,
        height: 100
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    infoName: {
        fontWeight: 'bold'
    },
    infoPrice: {
        fontWeight: 'bold',
        color: 'red'
    },
    info: {
        justifyContent: 'space-around',
        maxWidth: 120
    }
})

export default styles