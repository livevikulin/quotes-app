/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import { Navigator } from './src/navigation/Navigator';
import configureStore from './src/store/store';

const store = configureStore();

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <View style={styles.wrapper}>
                    <Header />
                    <Navigator />
                </View>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
    },
    wrapper: {
        flex: 1,
    },
});
