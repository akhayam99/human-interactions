import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export const BottomTabSafeArea: React.FunctionComponent<{
  children: JSX.Element,
}> = ({ children }): JSX.Element => {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 100, paddingHorizontal: 20 }}>
      {children}
    </SafeAreaView>
  );
}
