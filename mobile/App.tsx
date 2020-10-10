import React from 'react';
import { View, StatusBar } from 'react-native';
import Home from './src/pages/Home';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { AppLoading } from 'expo';

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_500Medium,
    Roboto_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
      <Home />
    </>
  );
}
