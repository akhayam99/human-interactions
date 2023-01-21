import React from 'react';
import { Button, View } from 'react-native';
import { Primary } from '../../../assets/colors/Primary';
import { BottomTabSafeArea } from '../../components/BottomTabSafeArea';
import { Form } from './form';

export const Search = (): JSX.Element => {
  return (
    <BottomTabSafeArea>
      <View>
        <View style={{
          backgroundColor: 'white',
          borderRadius: 20,
          gap: 8,
          elevation: 6,
          top: 60,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
        }}>
          <Form />
          <View style={{
            backgroundColor: Primary,
            borderBottomLeftRadius: 20,
            borderBottomEndRadius: 20,
            height: 60,
            justifyContent: 'center'
          }}>
            <Button title={'Search'} color={'white'} />
          </View>
        </View>
      </View>
    </BottomTabSafeArea>
  )
}
