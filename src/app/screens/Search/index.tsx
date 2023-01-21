import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faCar, faChair, faList, faRandom, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { Primary } from '../../../assets/colors/Primary';
import { BottomTabSafeArea } from '../../components/BottomTabSafeArea';
import { HiInput } from '../../DS/Input';

export const Search = (): JSX.Element => {
  const [age, setAge] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [distance, setDistance] = useState('')
  const [event, setEvent] = useState('')
  const [type, setType] = useState('')
  const [people, setPeople] = useState('')

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
          <View style={{
            gap: 8,
            paddingHorizontal: 24,
            paddingVertical: 8,
          }}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <HiInput
                value={date}
                onChangeText={setDate}
                secureTextEntry={false}
                icon={faCalendar}
                placeholder={'Date'}
              />
              <HiInput
                value={people}
                onChangeText={setPeople}
                secureTextEntry={false}
                icon={faUser}
                placeholder={'Users'}
              />
            </View>

            <HiInput
              value={hour}
              onChangeText={setHour}
              secureTextEntry={false}
              icon={faClock}
              placeholder={'Hour'}
            />

            <HiInput
              value={distance}
              onChangeText={setDistance}
              placeholder={'Distance'}
              secureTextEntry={false}
              icon={faCar}
            />

            <HiInput
              value={type}
              onChangeText={setType}
              placeholder={"Type"}
              secureTextEntry={true}
              icon={faList}
            />

            <HiInput
              value={event}
              onChangeText={setEvent}
              placeholder={"Event"}
              secureTextEntry={true}
              icon={faChair}
            />

            <HiInput
              value={age}
              onChangeText={setAge}
              placeholder={"Range"}
              secureTextEntry={true}
              icon={faRandom}
            />
          </View>
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
