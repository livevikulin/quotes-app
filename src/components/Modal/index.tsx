import React from 'react';
import { Modal, Text, Pressable, View, FlatList } from 'react-native';
import { DataItemType } from '../../screens/Quotes';
import { styles } from './styles';

type ModalPropsType = {
    open: boolean;
    hideModal: (param: any) => void;
    data: DataItemType;
};

type ArrayItemsType = {
    item: any;
};

const ModalQuotes = ({ open, hideModal, data }: ModalPropsType) => {
    const title = data && data[0];
    const infoQuote = data && data[1];
    const items = Object.entries(infoQuote);

    const renderItem = ({ item }: ArrayItemsType) => {
        return (
            <View style={styles.modalBoxText}>
                <Text style={styles.modalBoxKey}>
                    {item[0]} : {item[1]}
                </Text>
            </View>
        );
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={open}
                onRequestClose={hideModal}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View>
                            <Text style={styles.modalTitle}>{title}</Text>
                        </View>
                        <FlatList data={items} renderItem={renderItem} />
                        <Pressable
                            style={[styles.buttonClose]}
                            onPress={hideModal}>
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalQuotes;
