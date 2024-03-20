import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import HalkaArzScreen from '../screens/halkaarz/HalkaArzScreen';
import FormasyonScreen from '../screens/formasyon/FormasyonScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen name="HalkaArz" component={HalkaArzScreen}
                    options={{ headerShown: true, title: "Halka Arzlar" }} />
                <Stack.Screen name="Formasyon" component={FormasyonScreen}
                    options={{ headerShown: true, title: "Formasyonlar" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}