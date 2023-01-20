import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

interface Props extends TextInputProps {
  icon?: any
}

export const HiInput: React.FC<Props> = ({ icon, ...props }) => {
  return (
    <View style={styles.input}>
      {!!icon && <FontAwesomeIcon icon={icon} size={30} />}
      <TextInput {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    color: 'black',
    margin: 10,
    padding: 10,
  },
});
