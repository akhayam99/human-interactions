import { faCalendar, faClock, faUser } from "@fortawesome/free-regular-svg-icons"
import { faCar, faChair, faList, faRandom } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { View } from "react-native"
import { HiInput } from "../../../DS/Input"

export const Form = (): JSX.Element => {
  const [age, setAge] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [distance, setDistance] = useState('')
  const [event, setEvent] = useState('')
  const [type, setType] = useState('')
  const [people, setPeople] = useState('')

  return (
    <View style={{
      gap: 8,
      paddingHorizontal: 24,
      paddingVertical: 8,
    }
    }>
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

      < HiInput
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
  )
}
