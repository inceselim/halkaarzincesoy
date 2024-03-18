import React from 'react';
import { View, Text } from 'react-native';
import analytics from '@react-native-firebase/analytics';
import { firebase } from '@react-native-firebase/analytics';
// ...

export default function HomeScreen() {
    async () => {
        const appInstanceId = await analytics().getAppInstanceId();
        await analytics().setAnalyticsCollectionEnabled(true);

        await firebase.analytics().setConsent({
            analytics_storage: true,
            ad_storage: true,
            ad_user_data: true,
            ad_personalization: true,
        });
    }
    return (
        <View>
            <Text></Text>
        </View>
    );
}
