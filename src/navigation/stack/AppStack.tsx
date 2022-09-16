import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../screens/screens';
import { BottomTab } from '../tabs/BottomTab';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={Screens.BOTTOM} component={BottomTab} />
        </Stack.Navigator>
    );
};
