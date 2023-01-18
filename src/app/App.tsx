/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type { PropsWithChildren } from 'react';
import React from 'react';
import { Text, useColorScheme, View, ViewStyle } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
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
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#E4F0F5' }}>
      <View style={{ flex: 98 }}>
        <View style={{ flex: 94 }}>
          <View style={{ ...contentStyle }}>
            <Text> Content Here </Text>
          </View>
        </View>
        <View style={{ ...navigationStyle }}>
          <Text> Bottom Navigation Bar Here </Text>
        </View>
      </View>
      <View style={{ flex: 2 }} />
    </View>
  );
}


const contentStyle: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

const navigationStyle: ViewStyle = {
  alignItems: 'center',
  borderBottomColor: '#428AA3',
  borderBottomWidth: 1,
  borderStyle: 'solid',
  flex: 6,
  justifyContent: 'center',
  marginBottom: 6,
}

export default App;
