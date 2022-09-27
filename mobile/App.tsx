import { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import { Subscription } from 'expo-modules-core';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { Routes } from './src/routes';
import { Background, Loading } from './src/components';

import * as Notifications from 'expo-notifications';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';
import './src/services/notifications';

export default function App() {
  const [isFontsLoaded] = useFonts({ Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black });

  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  }, []);

  useEffect(() => {
    getNotificationListener.current = Notifications.addNotificationReceivedListener((notification) => { });

    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener((response) => { });

    return () => {
      if (getNotificationListener.current && responseNotificationListener.current) {
        Notifications.removeNotificationSubscription(getNotificationListener.current);
        Notifications.removeNotificationSubscription(responseNotificationListener.current);
      }
    }
  }, []);

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {isFontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}