import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    apply: {
        justifyContent: 'flex-end',
        marginBottom: 60,
        paddingHorizontal: 20,
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
    empty: {
        fontSize: 20,
        textAlign: 'center'
    }
})
export default styles