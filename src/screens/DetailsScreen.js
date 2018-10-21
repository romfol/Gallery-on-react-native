import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class DetailsScreen extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <View>
        <Text>HelloNigggas</Text>
      </View>
    );
  }
}

export default DetailsScreen;
