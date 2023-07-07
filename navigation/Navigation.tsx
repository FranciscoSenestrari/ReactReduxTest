import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AnotherScrenn from '../screens/AnotherScrenn';
import SecondScreen from '../screens/SecondScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="GuardarTexto" component={SecondScreen} />
                <Stack.Screen name="MostrarTexto" component={AnotherScrenn} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation