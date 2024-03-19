import React, { useCallback, useEffect } from 'react';
import MainNavigation from '../navigation/MainNavigation';
import messaging from '@react-native-firebase/messaging';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import { TrackingStatus, requestTrackingPermission } from 'react-native-tracking-transparency';

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



  const [trackingStatus, setTrackingStatus] = React.useState<
    TrackingStatus | '(loading)'
  >('(loading)');

  // useEffect(() => {
  //   request()
  //   getTrackingStatus()
  //     .then((status: any) => {
  //       setTrackingStatus(status);
  //     })
  //     // .catch((e) => Alert.alert('Error', e?.toString?.() ?? e));
  // }, []);
  const request = useCallback(async () => {
    try {
      const status = await requestTrackingPermission();
      setTrackingStatus(status);
    } catch (e: any) {
      Alert.alert('Error', e?.toString?.() ?? e);
    }
  }, []);
  async function getTrackingStatus() {
    const trackingStatus: any = getTrackingStatus();
    if (trackingStatus === 'authorized' || trackingStatus === 'unavailable') {
      // enable tracking features
    }
  }

  useEffect(() => {
    request()
    getTrackingStatus()
  }, [])
  return (
    <MainNavigation />
  );
}