import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const WelcomeScreen = ({ navigation }) => {
    const users = [
        {
            txt: 'Oddiy agent',
            route: 'simple_agent',
            id: 1
        },
        {
            txt: 'Super agent',
            route: 'super_agent',
            id: 2,
        },
        {
            txt: 'Director',
            route: 'director',
            id: 3,
        }
    ]
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text
                style={{
                    fontSize: 50
                }}
            >Uy Agentlikka xush kelibsiz</Text>
            <Text>Siz kim bolib kirmoqchisiz ?</Text>
            <View>
                {users.map((item) => (
                    <TouchableOpacity style={{
                        backgroundColor: '#001219',
                        color: '#fff',
                        marginVertical: 13,
                        paddingHorizontal: 42,
                        paddingVertical: 20,
                        borderRadius: 12
                    }}
                        key={item.id}
                        onPress={() => navigation.navigate('login', {
                            rol: item.route
                        })}
                    >
                        <Text style={{
                            color: '#fff',
                            fontSize: 18,
                        }}>{item.txt}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({})