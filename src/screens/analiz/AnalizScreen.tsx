import React, { useCallback, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from '../../styles/styles';
import YoutubePlayer from "react-native-youtube-iframe";
import G1 from '../../ads/G1';
import G2 from '../../ads/G2';

export default function AnalizScreen() {
    G1()
    G2()
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state: any) => {
        if (state === "ended") {
            setPlaying(false);
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <ScrollView>
                    <Text style={styles.textTitle}>Tekniz Analiz</Text>
                    <Text style={styles.textBold}>Bollinger Bant</Text>
                    <YoutubePlayer
                        height={250}
                        allowWebViewZoom={true}
                        play={true}
                        videoId={"ZkG0dOIyrHI"}
                        onChangeState={onStateChange}
                    />
                    <Text style={styles.textNormal}>{"\t" + "\t" + "\t" + "\t"}Bollinger Bantları, beş dakikalık, günlük, haftalık, grafikler gibi farklı zaman dilimlerinde kullanılabilir. Ayarlar, farklı ticaret stillerine uyacak şekilde ayarlanabilir. Enstrümanın fiyatı üst banda doğru hareket etmesi, aşırı alım olduğunun bir işaretidir. Genel olarak trader’lar bir hisse için aşırı alım yapıldığına inandığında satış yapmaya çalışır. Varlığın fiyatı alt banda doğru hareket etmesi, aşırı satışın bir işaretidir.</Text>
                    <Text style={styles.textNormal}>{"\t" + "\t" + "\t" + "\t"}Öncelikle fiyat üst banda ulaştığında, mutlaka satış yapmanıza gerekmediği gibi, fiyat alt banda değdiğinde, mutlaka satın almanız da gerekmez. Aşırı alım ve satış koşullarının özellikle RSI ile teyit edilmesi tavsiye edilir. </Text>
                    <Text />
                    <Text style={styles.textBold}>RSI (Relative Strength Index)</Text>
                    <Text style={styles.textNormal}>{"\t" + "\t" + "\t" + "\t"}RSI (Relative Strength Index), göreceli güç endeksi anlamına gelir ve teknik analizde kullanılan bir gösterge veya osilatördür. RSI, bir finansal enstrümanın (hisse senedi, döviz, emtia vb.) fiyat değişimlerinin hızını ve büyüklüğünü ölçerek, aşırı alım veya aşırı satım koşullarını tanımlamak için kullanılır. </Text>
                    <Text style={styles.textNormal}>{"\t" + "\t" + "\t" + "\t"}finansal enstrümanların fiyat hareketlerinin hızını ve büyüklüğünü değerlendirmek için kullanılır. RSI, 0 ile 100 arasında bir değer üretir</Text>
                    <Text style={styles.textNormal}>{"\t" + "\t" + "\t" + "\t"}RSI değeri 70 veya daha yüksekse: Bu, finansal enstrümanın aşırı alım koşullarında olduğunu gösterebilir. Yüksek RSI, fiyatların artık yükselme eğiliminde olduğu ve bir düzeltme veya geri çekilme olasılığının arttığı anlamına gelir.</Text>
                    <Text style={styles.textNormal}>{"\t" + "\t" + "\t" + "\t"}RSI değeri 30 veya daha düşükse: bir yükselişin gelebileceği anlamına gelir.</Text>
                    <Text style={styles.textNormal}>{"\t" + "\t" + "\t" + "\t"}</Text>
                    <YoutubePlayer
                        height={250}
                        allowWebViewZoom={true}
                        play={true}
                        videoId={"LKDlulXy__A"}
                        onChangeState={onStateChange}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
