import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { name } from '../../app.json';

const Header = () => {
  const { container, text } = styles;
  return (
    <View style={container}>
      <Text style={text}>{name.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
});

export { Header };
