import React from 'react';
import { Platform } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = Platform.OS === "ios" ?
    "ca-app-pub-1017432203303316/8449147028" :
    "ca-app-pub-1017432203303316/8449147028"
    
export default function B2() {
    return (
        <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.BANNER}
        />
    );
}