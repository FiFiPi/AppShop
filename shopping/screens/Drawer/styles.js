import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 0.4,
        alignItems: "center",
        justifyContent: 'center'

    },
    headerBox: {
        width: 100,
        height: 100,
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: '900',
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
    body: {
        flex: 4,
        backgroundColor: 'pink',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 150,
        margin: 10
    },

    bottomDrawerSection: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomDrawerSectionText: {
        fontWeight: '700',
        fontSize: 20
    }
})
export default styles