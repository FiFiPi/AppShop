import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderColor: 'gray',
        marginBottom: 40
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        marginLeft: 25,
        fontSize: 20,
        color: 'red'
    }
})

export default styles