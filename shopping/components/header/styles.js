import { StyleSheet, Platform, StatusBar } from 'react-native'
import { COLORS } from '../../contains'
const styles = StyleSheet.create({
    header: {
        //backgroundColor: COLORS.grey,
        paddingTop: Platform.OS === "android" ? 20 : 0,
        //justifyContent: 'center',
        width: '100%',
        height: 150
    },
    iconHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10
    },
    textHeader: {
        fontSize: 30,
        color: COLORS.bgblue,
        fontWeight: '900'
    },
    bottom: {
        flex: 1,
        paddingHorizontal: 15
    }
})

export default styles