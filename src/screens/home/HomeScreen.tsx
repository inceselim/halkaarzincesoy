import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from '../../styles/styles';
import { CardView } from '../../components/CardView/CardView';
import { ButtonPrimary } from '../../components/ButtonPrimary/ButtonPrimary';
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
                <CardView>
                    <View style={styles.viewRowsSpaceBetween}>
                        <Text style={styles.textBig}>Başlama Tarihi:</Text>
                        <Text style={styles.textBig}>04.03.2024</Text>
                    </View>
                    <View style={styles.viewRowsSpaceBetween}>
                        <Text style={styles.textBig}>Bitiş Tarihi:</Text>
                        <Text style={styles.textBig}>04.03.2024</Text>
                    </View>
                </CardView>
                <ButtonPrimary text="Halka Arzlar" />
                <ButtonPrimary text="Borsa Eğitimleri" />
                <ButtonPrimary text="Teknik Analizler" />
            </View>
        </SafeAreaView>
    );
}