import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../colors/colors';

export const IconSvgBottomAbout = () => {
    return (
        <Svg width={24} height={24}>
            <Path
                fill="none"
                stroke={Colors.mainColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.157 20.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.434.636 1.434 1.42h0v3.076c0 .662.533 1.203 1.202 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438h0V9.838a2.44 2.44 0 0 0-.962-1.905l-6.58-5.248a3.18 3.18 0 0 0-3.945 0L3.462 7.943A2.42 2.42 0 0 0 2.5 9.847v8.715C2.5 20.46 4.055 22 5.973 22h1.924c.685 0 1.241-.55 1.241-1.229h0"
            />
        </Svg>
    );
};
