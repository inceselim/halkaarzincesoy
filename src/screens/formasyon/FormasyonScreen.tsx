import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { styles } from '../../styles/styles';

export default function FormasyonScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.textTitle}>Formasyonlar</Text>
                <Image source={require("./11.jpeg")} style={{
                    height: 300,
                    width: "100%"
                }}
                />
            </View>
        </SafeAreaView>
    );
}
