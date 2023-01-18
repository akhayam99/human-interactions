import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>My Header</Text>
    </View>
  );
};

const styles = {
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6CA0DC',
    padding: 10,
    height: 60
  },
  headerText: {
    color: '#fff',
    fontSize: 20
  }
};

export default Header;
