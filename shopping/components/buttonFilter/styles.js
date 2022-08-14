import { StyleSheet } from 'react-native'
import { COLORS } from '../../contains'
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.room,
        padding: 20,
        borderRadius: 10,
        shadowColor: COLORS.main,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    active: {
        backgroundColor: COLORS.main
    }
})
export default styles