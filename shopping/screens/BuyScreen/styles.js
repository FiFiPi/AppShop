import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {

    },
    apply: {
        justifyContent: 'flex-end',
        marginBottom: 60,
        paddingHorizontal: 20
    },
    buttonText: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'yellow',
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    viewPrice: {
        marginTop: 5,
        justifyContent: 'space-between',
        borderTopWidth: 2,
        flexDirection: 'row',
        padding: 10
    },
    price: {
        color: 'red',
        textAlign: 'right',
        marginRight: 15
    }
})
export default styles