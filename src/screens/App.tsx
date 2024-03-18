import React, { useEffect } from 'react';
import MainNavigation from '../navigation/MainNavigation';
import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid, Platform } from 'react-native';

export default function App() {
  async function requestUserPermission() {
    if (Platform.OS == "ios") {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    }
    else {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    }
  }
  useEffect(() => {
    requestUserPermission()
  }, [])
  return (
    <MainNavigation />
  );
}