import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const LoginScreen = ({ navigation, route }) => {
    const [login, setLogin] = useState('')

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{ width: '80%', gap: 24, marginBottom: 100 }}>
                <TextInput style={{
                    paddingVertical: 16,
                    paddingHorizontal: 17,
                    backgroundColor: '#001219',
                    color: '#fff',
                    fontSize: 16,
                    borderRadius: 10
                }} placeholder='Login' placeholderTextColor={'white'} />
                <TextInput style={{
                    paddingVertical: 16,
                    paddingHorizontal: 17,
                    backgroundColor: '#001219',
                    color: '#fff',
                    fontSize: 16,
                    borderRadius: 10
                }} placeholder='Password' placeholderTextColor={'white'} />
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: '#001219',
                    color: '#fff',
                    marginVertical: 13,
                    paddingHorizontal: 100,
                    paddingVertical: 17,
                    borderRadius: 12
                }}>
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 18,
                    }}>
                    Log-in
                </Text>
            </TouchableOpacity>
            {route.params.rol === 'simple_agent' ? <Text onPress={() => navigation.push('register', { rol: route.params.rol })} style={{ fontSize: 18 }}>Account yo'q mi? <Text style={{ fontWeight: 'bold' }}>Sing-up</Text></Text> : null}
        </View>
    )
}


const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
});

export default LoginScreen