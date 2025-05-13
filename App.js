import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}