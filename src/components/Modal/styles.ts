import { StyleSheet } from 'react-native';
import { Colors } from '../../assets/colors/colors';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: '90%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    modalBoxText: {
        flexWrap: 'nowrap',
        marginBottom: 8,
    },
    modalBoxKey: {
        fontWeight: 'bold',
    },
    buttonClose: {
        borderRadius: 4,
        paddingVertical: 12,
        paddingHorizontal: 24,
        elevation: 2,
        backgroundColor: Colors.mainColor,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
