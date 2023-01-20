import React from 'react';
import { Text, View } from 'react-native';
import { BottomTabSafeArea } from '../../components/BottomTabSafeArea';
import { HiInput } from '../../DS/Input';

export const Search = (): JSX.Element => {
  return (
    <BottomTabSafeArea>
      <View>
        <Text> Search Works </Text>

        <HiInput
          value={''}
          onChangeText={handleChanges}
          placeholder="Enter here the date"
          secureTextEntry={false}
        />

        <HiInput
          value={''}
          onChangeText={handleChanges}
          placeholder="Enter here the distance"
          secureTextEntry={false}
        />

        <HiInput
          value={''}
          onChangeText={handleChanges}
          placeholder="Enter here the type"
          secureTextEntry={true}
        />

        <HiInput
          value={''}
          onChangeText={handleChanges}
          placeholder="Enter here the event"
          secureTextEntry={true}
        />

        <HiInput
          value={''}
          onChangeText={handleChanges}
          placeholder="Enter here the age range"
          secureTextEntry={true}
        />
      </View>
    </BottomTabSafeArea>
  );
}

const handleChanges = (value: string): void => {
  console.log(value)
}
