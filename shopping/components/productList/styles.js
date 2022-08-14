import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    amount: {
        flexDirection: 'row',
        marginVertical: 8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 8
    },
    signal: {
        backgroundColor: '#02a0c5',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#02a0c5',
        marginHorizontal: 6
    },
    number: {
        fontSize: 19,
        fontWeight: '700'
    },
    box: {
        height: 120,
        marginRight: 4,
        flex: 1
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 2
    },
    info: {
        flex: 2
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17
    },
    ram: {
        fontWeight: '200',
        marginVertical: 10
    },
    price: {
        color: 'red',
        fontSize: 18,
        fontWeight: '800',
    }
})

export default styles