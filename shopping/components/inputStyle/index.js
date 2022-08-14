import { View, Text } from 'react-native'
import { TextInput } from 'react-native-paper'
import React, { useState } from 'react'
import styles from './styles'
const InputStyle = ({ name, onChange, editable = true }) => {
    let obj = {
        name: name,
        placeholder: `${name}. . .`,
        editable: editable
    }
    const [code, setCode] = useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{obj.name}</Text>
            <TextInput
                mode="outlined"
                // label="Họ và tên . . ."
                placeholder={obj.placeholder}
                // right={<TextInput.Affix text="/50" />}
                style={styles.name}
                // keyboardType="numeric"
                editable={obj.editable}
                value={code}
                onChangeText={text => setCode(text)}

            />
        </View>
    )
}
export default InputStyle