import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../styles/colors';

export const CardView: any = ({ children }: any) => {
    return (
        <View style={{
            marginVertical: 10,
            backgroundColor: colors.light,
            paddingVertical: 14,
            paddingHorizontal: 12,
            borderRadius: 8,
        }}>
            {children}
        </View>
    );
}
