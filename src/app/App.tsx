import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppRoutes } from './routes/AppRoutes';

export const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer >
    </SafeAreaProvider>
  );
}
