import React from 'react';
import { View, Text } from 'react-native';
import { globalStyle } from '../../styles/style';

export default function About() {
    return (
        <View style={globalStyle.main}>
            <Text style={globalStyle.blackTitleText}>About company</Text>
            <Text style={globalStyle.blackSubtitleText}>Some text</Text>
        </View>
    );
}
