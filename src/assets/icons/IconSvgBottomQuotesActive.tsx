import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../colors/colors';

export const IconSvgBottomQuotesActive = () => {
    return (
        <Svg width={24} height={24}>
            <Path
                fill={Colors.mainColor}
                d="M16.67 2c3.4 0 5.32 1.93 5.33 5.33v9.34c0 3.4-1.93 5.33-5.33 5.33H7.33C3.93 22 2 20.07 2 16.67V7.33C2 3.93 3.93 2 7.33 2ZM12.5 6.13a.84.84 0 0 0-1.28.79v10.19c.05.43.41.75.83.75.43 0 .79-.32.83-.75V6.92a.815.815 0 0 0-.38-.79ZM7.83 9.41a.823.823 0 0 0-.88 0 .84.84 0 0 0-.39.79v6.91c.04.43.4.75.83.75.43 0 .79-.32.83-.75V10.2a.842.842 0 0 0-.39-.79Zm9.26 3.63a.839.839 0 0 0-.89 0 .806.806 0 0 0-.38.79v3.28c.04.43.4.75.83.75.42 0 .78-.32.83-.75v-3.28a.834.834 0 0 0-.39-.79Z"
            />
        </Svg>
    );
};
