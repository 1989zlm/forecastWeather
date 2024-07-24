import { View, Text, LogBox } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state'
])

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}