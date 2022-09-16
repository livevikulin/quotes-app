import { StyleSheet } from 'react-native';
import { Colors } from '../../assets/colors/colors';

export const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginBottom: 16,
    },
    wrapper: {
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    errorBox: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginBottom: 16,
        backgroundColor: '#E41919',
    },
    errorText: {
        color: '#ffffff',
        fontSize: 18,
    },
    listWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        fontSize: 14,
        padding: 4,
        borderLeftWidth: 1,
    },
    textButton: {
        color: '#ffffff',
    },
    percentPositive: {
        color: Colors.eucalyptus,
    },
    percentNegative: {
        color: Colors.red,
    },
});
