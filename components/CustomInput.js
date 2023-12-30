import { TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ placeholder, onChangeText, style, secureTextEntry, value, type }) => {
    return (
        <>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                style={style}
                secureTextEntry={secureTextEntry}
                value={value}
                type={type}
            />
        </>
    )
}

export default CustomInput;