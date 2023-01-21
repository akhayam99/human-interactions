import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { Primary } from '../../../assets/colors/Primary';

interface Props extends TextInputProps {
  icon?: any
}

export const HiInput: React.FC<Props> = ({ icon, ...props }) => {
  return (
    <View style={styles.input}>
      <FontAwesomeIcon icon={icon} size={20} />
      <TextInput {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
    borderBottomColor: Primary,
    borderBottomWidth: 1,
    color: 'black',
    flex: 100,
    flexDirection: 'row',
    gap: 12,
    margin: 2,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
});
