import { StyleSheet } from 'react-native';
import { Colors } from '../assets/colors/colors';

export const globalStyle = StyleSheet.create({
    main: {
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16,
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: Colors.mainColor,
        paddingTop: 8,
        paddingBottom: 8,
        margin: 4,
        borderRadius: 4,
    },
    blackTitleText: {
        fontSize: 20,
        color: '#000000',
        marginBottom: 16,
    },
    blackSubtitleText: {
        fontSize: 14,
        color: '#000000',
    },
});
