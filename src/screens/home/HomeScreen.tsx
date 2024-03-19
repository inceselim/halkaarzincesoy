import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { styles } from '../../styles/styles';
import firestore from '@react-native-firebase/firestore';
import { CardView } from '../../components/CardView/CardView';
import { ButtonPrimary } from '../../components/ButtonPrimary/ButtonPrimary';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
    const navigation: any = useNavigation();
    const [dataSonHalkaArz, setDataSonHalkaArz] = useState([])
    useEffect(() => {
        const subscriber = firestore()
            .collection('sonhalkaarz')
            .onSnapshot(querySnapshot => {
                const data: any = [];
                querySnapshot.forEach(documentSnapshot => {
                    data.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,

                    });
                });
                setDataSonHalkaArz(data);
                console.log("dat" + dataSonHalkaArz)
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={{ flex: 0.4 }}>
                    <ButtonPrimary text="Halka Arzlar"
                        onPress={() => navigation.navigate("HalkaArz")} />
                    <ButtonPrimary text="Borsa Eğitimleri" />
                    <ButtonPrimary text="Teknik Analizler" />
                    <ButtonPrimary text="Formasyonlar" />
                    <Text style={styles.textTitle}>Son Halka Arzlar</Text>
                </View>

                <View style={{ flex: 0.6 }}>
                    <FlatList data={dataSonHalkaArz}
                        ListEmptyComponent={
                            <CardView>
                                <Text style={styles.textTitle}>Aktif Halka Arz Bulunamadı...</Text>
                            </CardView>
                        }
                        renderItem={({ item }: any) => {
                            console.log("itetm: ", item)
                            return (
                                <CardView>
                                    <Text style={styles.textTitle}>{item?.code}</Text>
                                    <Text style={styles.textNormal}>{item?.sirket}</Text>
                                    <Text />
                                    <View style={styles.viewRowsSpaceBetween}>
                                        <Text style={styles.textBig}>Başlama Tarihi:</Text>
                                        <Text style={styles.textBig}>{item?.begindate}</Text>
                                    </View>
                                    <View style={styles.viewRowsSpaceBetween}>
                                        <Text style={styles.textBig}>Bitiş Tarihi:</Text>
                                        <Text style={styles.textBig}>{item?.enddate}</Text>
                                    </View>
                                </CardView>
                            )
                        }} />
                </View>
            </View>
        </SafeAreaView>
    );
}