import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Text, View } from 'react-native';
import { BottomTabSafeArea } from '../../components/BottomTabSafeArea';

export const Search = (): JSX.Element => {
  return (
    <BottomTabSafeArea>
      <View>
        <Text> Search Works </Text>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </View>
    </BottomTabSafeArea>
  );
}
