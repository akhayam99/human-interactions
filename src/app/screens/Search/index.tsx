import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { BottomTabSafeArea } from '../../components/BottomTabSafeArea';
import { HiInput } from '../../DS/Input';

export const Search = (): JSX.Element => {
  const [pippo, setPippo] = useState('');
  // const [pippo, setPippo] = useState('');
  // const [pippo, setPippo] = useState('');
  // const [pippo, setPippo] = useState('');


  return (
    <BottomTabSafeArea>
      <View>
        <Text> Search Works </Text>

        <View>
          <HiInput
            value={pippo}
            onChangeText={setPippo}
            placeholder="Enter here the date"
            secureTextEntry={false}
            icon={faPeopleArrows}
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
      </View>
    </BottomTabSafeArea>
  );
}

const handleChanges = (value: string): void => {
  console.log(value)
}
