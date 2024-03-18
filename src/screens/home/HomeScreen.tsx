import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from '../../styles/styles';
// ...

export default function HomeScreen() {
    // async () => {
    //     const appInstanceId = await analytics().getAppInstanceId();
    //     await analytics().setAnalyticsCollectionEnabled(true);

    //     await firebase.analytics().setConsent({
    //         analytics_storage: true,
    //         ad_storage: true,
    //         ad_user_data: true,
    //         ad_personalization: true,
    //     });
    // }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.textTitle}>Son Halka Arzlar</Text>
            </View>
        </SafeAreaView>
    );
}