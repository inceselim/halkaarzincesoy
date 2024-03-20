import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import { styles } from '../../styles/styles';

export default function FormasyonScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <ScrollView>
                    <Text style={styles.textTitle}>Formasyonlar</Text>
                    <Image source={require("./11.jpeg")} style={{
                        height: 250,
                        width: "100%",
                        resizeMode: "contain"
                    }} />
                    <Image source={require("./12.png")} style={{
                        height: 250,
                        width: "100%",
                        resizeMode: "contain"
                    }} />
                    <Image source={require("./13.jpeg")} style={{
                        height: 250,
                        width: "100%",
                        resizeMode: "contain"
                    }} />
                    <Image source={require("./133.jpeg")} style={{
                        height: 250,
                        width: "100%",
                        resizeMode: "contain"
                    }} />
                    <Image source={require("./134.jpeg")} style={{
                        height: 250,
                        width: "100%",
                        resizeMode: "contain"
                    }} />
                    <Image source={require("./135.jpeg")} style={{
                        height: 250,
                        width: "100%",
                        resizeMode: "contain"
                    }} />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
