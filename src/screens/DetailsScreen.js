import React, { Component } from 'react';
import { Image, View, Text, ScrollView, StyleSheet } from 'react-native';

class DetailsScreen extends Component {
  render() {
    //const { id } = this.props.navigation.state.params;
    console.log(
      'proooooooooooooooooooooooooooooooooooooooooooooooooops22',
      this.props.navigation.state.params.urls.thumb
    );
    return (
      <ScrollView>
        <View>
          <Text>1121</Text>
        </View>
      </ScrollView>
    );
  }
}
//<Image style={styles.photoStyle} source={{ uri: props.navigation.state.params.urls.full }} />;
// const styles = StyleSheet.create({
//   photoStyle: {
//     width: 300,
//     height: 300,
//   },
// });

export default DetailsScreen;
