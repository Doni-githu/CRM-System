import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native"
import Welcome from "./screens/WelcomeScreen"
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'Xush kelibsiz' }}
        />
        <Stack.Screen
          name='login'
          component={LoginScreen}
          options={{ title: 'Login', animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='register'
          component={RegisterScreen}
          options={{ title: 'Register', animation: 'slide_from_right' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App