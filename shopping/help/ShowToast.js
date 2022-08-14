import Toast from 'react-native-root-toast';
import { COLORS } from '../contains'

const ShowToast = (messege) => {
    return (
        Toast.show(messege, {
            position: 50,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: COLORS.main
        })
    )
}
export default ShowToast
