import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from '../screens/screens';
import About from '../../screens/About';
import Quotes from '../../screens/Quotes';
import { IconSvgBottomAbout } from '../../assets/icons/IconSvgBottomAbout';
import { IconSvgBottomQuotes } from '../../assets/icons/IconSvgBottomQuotes';
import { IconSvgBottomAboutActive } from '../../assets/icons/IconSvgBottomAboutActive';
import { IconSvgBottomQuotesActive } from '../../assets/icons/IconSvgBottomQuotesActive';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen
                name={Screens.ABOUT}
                component={About}
                options={{
                    title: Screens.ABOUT,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <IconSvgBottomAboutActive />
                        ) : (
                            <IconSvgBottomAbout />
                        );
                    },
                }}
            />
            <Tab.Screen
                name={Screens.QUOTES}
                component={Quotes}
                options={{
                    title: Screens.QUOTES,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <IconSvgBottomQuotesActive />
                        ) : (
                            <IconSvgBottomQuotes />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};
