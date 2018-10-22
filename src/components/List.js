import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const List = props => {
  const { thumb } = props.data.urls;
  const { name } = props.data.user;
  const { photoStyle, container } = styles;
  //console.log('dddddddddddddd', )

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={container}>
        <Image style={photoStyle} source={{ uri: thumb }} />
        <Text>Author: {name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  photoStyle: {
    marginTop: 20,
    marginBottom: 5,
    width: 250,
    height: 250,
    borderRadius: 10,
  },
});

export { List };
