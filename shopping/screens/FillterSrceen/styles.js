import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '700'
    },
    box: {
        flexDirection: 'row',
        margin: 15
    },
    price: {

    },
    boxPrice: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    textPrice: {
        fontSize: 14,
        fontWeight: '600',
        color: 'blue'
    },
    button: {
        backgroundColor: 'yellow',
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    apply: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 60
    },
    buttonText: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    }

})
export default styles