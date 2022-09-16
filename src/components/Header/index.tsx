import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Header = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>POLONIEX</Text>
        </View>
    );
};

export default Header;
