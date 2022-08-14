import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { IMAGES } from '../../contains'
import { TextInput } from 'react-native-paper';

import styles from './styles'

const SignUpScreen = () => {
    const [showPass, setShowPass] = useState(true)



    return (
        <View style={styles.container}>
            {/* <Image source={IMAGES.coxanh} style={styles.backgound}/> */}
            <View style={styles.icon}>
                <MaterialCommunityIcons name="flower-outline" size={65} color="green" />
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Sign Up</Text>
                <Text style={styles.text}>Sign up now for free and start meditating and explore Medic</Text>
            </View>
            <TextInput
                //mode="outlined"
                style={styles.xxx}
                label="Name"
                placeholder="Type something"
                right={<TextInput.Affix />}
            />
            <TextInput
                //mode="outlined"
                style={styles.xxx}
                label="Email Address"
                placeholder="Type something"
                right={<TextInput.Affix />}
            />
            <TextInput
                style={styles.xxx}
                label="Password"
                secureTextEntry={showPass}
                right={<TextInput.Icon name="eye" onPress={() => setShowPass(!showPass)} />}
            />
            <View style={styles.box}>
                <Text style={styles.textBox}>SIGNUP</Text>
            </View>
            <View style={styles.inputBot}>
                <Text style={styles.text}>Already have an account?</Text>
                <Text style={styles.textSign}>Sign In</Text>
            </View>
        </View>
    )
}

export default SignUpScreen
