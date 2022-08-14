import { StyleSheet } from 'react-native'
import { COLORS } from '../../contains'
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100
    },
    background: {
        backgroundColor: COLORS.pink
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    bottom: {
        flex: 1,
        paddingHorizontal: 20
    },
    text: {
        fontSize: 25,
        color: 'red',
        fontWeight: 'bold'
    }
})

export default styles