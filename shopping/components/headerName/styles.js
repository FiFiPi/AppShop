import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 140
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        alignItems: 'center'
    },
    title: {
        fontSize: 27,
        color: 'red',
        fontWeight: 'bold',
        width: '60%'
    },
    bottom: {
        marginHorizontal: 20,
        flex: 1
    }

})

export default styles