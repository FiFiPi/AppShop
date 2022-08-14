import { StyleSheet, Dimensions } from 'react-native'
const Width = Dimensions.get('window').width - 20;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        marginTop: 30,

    },
    category: {
        backgroundColor: "white",
        width: Width / 2,
        height: 220,
        marginVertical: 8,
        marginHorizontal: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    iconLeft: {
        alignItems: "flex-start",
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    iconRight: {
        alignItems: 'flex-end',
        backgroundColor: 'yellow'
    },
    icon: {

    }

})

export default styles