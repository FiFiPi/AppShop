import { StyleSheet, Dimensions } from 'react-native'
const Width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        paddingHorizontal: 20,

    },
    box: {
        width: Width / 5,
        marginTop: 5,
        alignItems: 'center',
        marginRight: 10,
    },
    boxCategory: {
        width: 80,
        height: 80
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    title: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleLeft: {
        fontWeight: 'bold'
    },
    titleRight: {
        fontWeight: '200',
    },
    categoryRow: {
        flexDirection: 'row',
    }
})

export default styles