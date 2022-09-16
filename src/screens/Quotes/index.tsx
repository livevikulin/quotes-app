import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { showModal, hideModal, getTickers } from '../../store/tickers';
import {
    ActivityIndicator,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { globalStyle } from '../../styles/style';
import ModalQuotes from '../../components/Modal';

type DataItemValueType = {
    baseVolume: string;
    high24hr: string;
    highestBid: string;
    id: number;
    isFrozen: string;
    last: string;
    low24hr: string;
    lowestAsk: string;
    marginTradingEnabled: string;
    percentChange: string;
    postOnly: string;
    quoteVolume: string;
};

export type DataItemType = [string, DataItemValueType];

export default function Quotes() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    // @ts-ignore
    const { quotes, error, isLoading, modal } = state;
    const [info, setInfo] = useState<DataItemType | undefined>();

    useEffect((): (() => void) => {
        let updateFetch: any;
        dispatch(getTickers());

        if (modal) {
            return () => clearInterval(updateFetch);
        } else {
            updateFetch = setInterval(() => {
                dispatch(getTickers());
            }, 5000);
        }

        return () => clearInterval(updateFetch);
    }, [dispatch, modal]);

    const handleShowPopup = (item: any) => {
        // @ts-ignore
        dispatch(showModal());
        setInfo(item);
    };

    const handleHidePopup = () => {
        // @ts-ignore
        dispatch(hideModal());
    };

    const arrQuotes: DataItemType[] | undefined =
        quotes && Object.entries(quotes);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Quotes</Text>
            {error && (
                <View style={styles.errorBox}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}
            {isLoading && <ActivityIndicator size="large" />}
            {!isLoading && (
                <View>
                    <FlatList
                        data={arrQuotes}
                        renderItem={({ item }) => {
                            const key = item[0];
                            const value = item[1];
                            const { id, last, highestBid, percentChange } =
                                value;

                            return (
                                <View key={id} style={styles.listWrapper}>
                                    <TouchableOpacity
                                        style={globalStyle.button}
                                        onPress={() => handleShowPopup(item)}>
                                        <Text style={styles.textButton}>
                                            {key}
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={styles.row}>{last}</Text>
                                    <Text style={styles.row}>{highestBid}</Text>
                                    <Text style={styles.row}>
                                        {percentChange}
                                    </Text>
                                </View>
                            );
                        }}
                    />
                </View>
            )}
            {info && (
                <ModalQuotes
                    open={modal}
                    data={info}
                    hideModal={handleHidePopup}
                />
            )}
        </View>
    );
}
