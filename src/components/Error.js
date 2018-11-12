import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { h } from '../../constants';

const Error = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>Network error occured</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: h,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 25,
    color: 'red',
  },
});
export { Error };
