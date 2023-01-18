import React from 'react';
import { Text, View } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>My footer</Text>
    </View>
  );
};

const styles = {
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6CA0DC',
    padding: 10,
    height: 60
  },
  footerText: {
    color: '#fff',
    fontSize: 20
  }
};

export default Footer;
