import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export const HiInput: React.FC<Props> = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  console.log(value)
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.input}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    color: 'black',
    margin: 10,
    padding: 10,
  },
});
