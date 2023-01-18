import React from 'react';
import { Text, View } from 'react-native';

const Content = () => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.contentText}>My content</Text>
    </View>
  );
};

const styles = {
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  contentText: {
    fontSize: 2,
  }
};

export default Content;
