import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { Colors } from '../colors/colors';

export const IconSvgBottomQuotes = () => {
    return (
        <Svg width={24} height={24}>
            <G
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                stroke={Colors.mainColor}>
                <Path d="M7.371 10.202v6.86M12.038 6.919v10.143M16.629 13.827v3.235M16.686 2H7.314C4.048 2 2 4.312 2 7.585v8.83C2 19.688 4.038 22 7.314 22h9.372C19.962 22 22 19.688 22 16.415v-8.83C22 4.312 19.962 2 16.686 2Z" />
            </G>
        </Svg>
    );
};
