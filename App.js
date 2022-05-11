/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {useNetInfo} from '@react-native-community/netinfo';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const state = useNetInfo();

  console.log(state);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Testing '@react-native-community/netinfo'">
            Check state object and compatibility on Android & iOS, next values
            are interactive. Tip: Try to turn off/on Wi-Fi
          </Section>
          <Section title="Wifi type">{JSON.stringify(state?.type)}</Section>
          <Section title="isInternetReachable">
            {JSON.stringify(state?.isInternetReachable)}
          </Section>
          <Section title="isWifiEnabled">
            {JSON.stringify(state?.isWifiEnabled)}
          </Section>
          {state?.isWifiEnabled && (
            <>
              <Section title="Wi-Fi details">
                Only shown when wifi is connected
              </Section>
              <Section title="Wi-Fi SSID">
                {JSON.stringify(state?.details?.ssid)}
              </Section>
              <Section title="Wi-Fi Local IP">
                {JSON.stringify(state?.details?.ipAddress)}
              </Section>
              <Section title="Wi-Fi subnet">
                {JSON.stringify(state?.details?.subnet)}
              </Section>
              <Section title="Wi-Fi BSSID">
                {JSON.stringify(state?.details?.bssid)}
              </Section>
            </>
          )}
          <Section title="State">{JSON.stringify(state)}</Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
