import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { IMAGES } from '../../contains'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncLogin } from '../../store/slices/auth'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';

const LoginScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [showPass, setShowPass] = useState(true)
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const handleLogin = () => {
        dispatch(fetchAsyncLogin(data))
            .then(res => {
                if (!res.error) {
                    navigation.navigate('Home')
                }
            })
    }
    // const handleShowPass = () => {
    //     setShowPass(!showPass)
    // }
    return (
        <KeyboardAvoidingView style={styles.container}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
            behavior={Platform.OS == 'ios' ? 'padding' : null}>
            {/* <Image source={IMAGES.coxanh} style={styles.backgound}/> */}
            <ScrollView style={styles.inner} showsVerticalScrollIndicator={false}>
                <View style={styles.icon}>
                    <MaterialCommunityIcons name="flower-outline" size={65} color="green" />
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Sign In</Text>
                    <Text style={styles.text}>Sign in now to acces your excercises and saved music</Text>
                </View>
                <View >
                    <TextInput
                        //mode="outlined"
                        label="Email Address"
                        placeholder="Type something"
                        right={<TextInput.Affix />}
                        onChangeText={(val) => setData({ ...data, email: val })}
                        style={styles.xxx}
                    />
                    <TextInput
                        style={styles.xxx}
                        label="Password"
                        secureTextEntry={showPass}
                        right={<TextInput.Icon name="eye" onPress={() => setShowPass(!showPass)} />}
                        onChangeText={(val) => setData({ ...data, password: val })}
                    />
                </View>
                <View style={styles.forgotBox}>
                    <Text style={styles.textForgot}>Forgot Password?</Text>
                </View>
                <TouchableOpacity style={styles.box} onPress={handleLogin}>
                    <Text style={styles.textBox}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.inputBot}>
                    <Text style={styles.text}>Don't have an account?</Text>
                    <Text style={styles.textSign}>Sign Up</Text>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen
