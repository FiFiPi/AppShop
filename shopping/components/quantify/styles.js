import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    amount: {
        flexDirection: 'row',
        width: 140,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    signal: {
        backgroundColor: '#02a0c5',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: '#02a0c5',
        marginHorizontal: 10
    },
    number: {
        fontSize: 19,
        fontWeight: '700'
    },
    amount_small: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    signal_small: {
        width: 35,
        height: 40,
        backgroundColor: '#02a0c5',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    number_small: {
        fontSize: 22
    }
})

export default styles