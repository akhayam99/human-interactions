import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Primary } from '../../../assets/colors/Primary';

export const BottomTabSafeArea: React.FunctionComponent<{
  children: JSX.Element,
}> = ({ children }): JSX.Element => {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 100, borderBottomColor: Primary, borderBottomWidth: 1, borderStyle: 'solid' }}>
      {children}
    </SafeAreaView>
  );
}
