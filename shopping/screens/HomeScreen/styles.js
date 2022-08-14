import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../contains'
const Width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 5
    },
    header: {
        flex: 1
    },
})

export default styles