import React from 'react';
import { Platform } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = Platform.OS === "ios" ?
    "ca-app-pub-1017432203303316/4333909671" :
    "ca-app-pub-1017432203303316/4333909671"
    
export default function B3() {
    return (
        <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.BANNER}
        />
    );
}