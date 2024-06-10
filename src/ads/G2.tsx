import React, { useEffect, useState } from 'react';
import { Button, Platform } from 'react-native';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';


const adUnitId = Platform.OS === "ios" ?
    "ca-app-pub-1017432203303316/9011521289" :
    "ca-app-pub-1017432203303316/9011521289"

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: false,
    keywords: ['Insurance', 'Mortgage', 'Attorney', 'Claim', 'Gas', 'Electicity', 'Gas/Electicity', 'Game', 'Oyun',
        "spotifys", "en iyi online muhasebe programı", "android auto youtube music",
        "adobe acrobat reader gezginler", "adobe acrobat indir gezginler",
        "adobe", "youtube", "sigorta", "böcek ilaçlama", "lawyer", "business software", "software", "yazılım",
        "muhasebe", "asset management", "pest control", "google adwords", "cleanup & restoration services", "casino",
        "mortgages", "commerce", "ecommerce", "kargo", "kira", "sat", "iklim", "burs",
        "hotel", "otel", "strategy", "food", "yemek",
    ],
});

export default function G2() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setLoaded(true);
        });

        // Start loading the interstitial straight away
        interstitial.load();

        // Unsubscribe from events on unmount
        return unsubscribe;
    }, []);

    // No advert ready to show yet
    if (!loaded) {
        return null;
    }
    return interstitial.show()
}