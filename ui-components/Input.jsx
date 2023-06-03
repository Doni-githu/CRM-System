import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function Input({ placeholder, state, setState }) {
    return (
        <TextInput style={{
            paddingVertical: 16,
            paddingHorizontal: 17,
            marginVertical: 20,
            backgroundColor: '#001219',
            color: '#fff',
            fontSize: 16,
            borderRadius: 10
        }} placeholder={placeholder}
            value={state}
            onChangeText={(value) => {
                setState(value)
            }}
            placeholderTextColor={'white'} />
    )
}