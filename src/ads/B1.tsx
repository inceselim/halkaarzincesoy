import React from 'react';
import { Platform } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = Platform.OS === "ios" ?
    "ca-app-pub-1017432203303316/3311255120" :
    "ca-app-pub-1017432203303316/7897761535"
    
export default function B1() {
    return (
        <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.BANNER}
        />
    );
}