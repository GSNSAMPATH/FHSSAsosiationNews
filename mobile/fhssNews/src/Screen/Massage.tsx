import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Message Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default MessageScreen;
