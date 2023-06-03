import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Input from '../ui-components/Input'
import PhoneInput from 'react-native-phone-number-input'
import { useEffect } from 'react'
const RegisterScreen = ({ navigation, route }) => {
    console.log(route.params.rol)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [companyName, setCompanyName] = useState('')

    const agent = {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        companyName,
        rol: route.params.rol
    }


    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ScrollView style={{ width: '80%', gap: 24, marginBottom: 0, flexDirection: 'column' }}>
                <Input placeholder={'First name'} state={firstName} setState={setFirstName} />
                <Input placeholder={'Last name'} state={lastName} setState={setLastName} />
                <Input placeholder={'Company name'} state={companyName} setState={setCompanyName} />
                <Input placeholder={'Email'} state={email} setState={setEmail} />
                <Input placeholder={'Password'} state={password} setState={setPassword} />
                <View>
                    <Text>Phone number</Text>
                    <PhoneInput
                        defaultValue={phoneNumber}
                        defaultCode='UZ'
                        withDarkTheme

                        textInputStyle={{
                            backgroundColor: '#001219',
                            color: '#fff',
                        }}

                        codeTextStyle={{
                            backgroundColor: '#001219',
                            color: '#fff',
                        }}

                        flagButtonStyle={{
                            backgroundColor: '#001219',
                            color: '#fff',
                        }}

                        textContainerStyle={{
                            backgroundColor: '#001219',
                            color: '#fff',
                        }}
                        
                        placeholder='Number'



                        containerStyle={{
                            paddingVertical: 16,
                            paddingHorizontal: 10,
                            marginVertical: 20,
                            backgroundColor: '#001219',
                            borderRadius: 10,
                            fontSize: 16,
                        }}


                        onChangeText={(text) => {
                            setPhoneNumber(text)
                        }}
                    />
                </View>
            </ScrollView>
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
                    Sing-up
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})