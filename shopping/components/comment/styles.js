import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    comment: {
        flexDirection: 'row',
        borderTopWidth: 2,
        marginHorizontal: 15,
        alignItems: 'center'
    },
    viewImg: {
        height: 30,
        width: 30
    },
    img: {
        width: '100%',
        height: '100%'
    },
    user: {
        fontSize: 20,
        fontWeight: '700'
    },
    viewContent: {
        marginVertical: 10,
        marginLeft: 20
    }
})
export default styles