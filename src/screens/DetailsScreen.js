import React, { Component } from 'react';
import { Image, View, StyleSheet} from 'react-native';
import { w, h } from '../../constants';

class DetailsScreen extends Component {
  render() {
    const { urls } = this.props.navigation.state.params;
    return (
      <View>
        <Image style={styles.photoStyle} source={{ uri: urls.full }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photoStyle: {
    width: w,
    height: h,
  },
});

export default DetailsScreen;

