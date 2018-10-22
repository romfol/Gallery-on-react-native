import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, List } from '../components';
import { DETAILS_PAGE } from '../../routes';

const url =
  'https://api.unsplash.com/photos/?client_id=f571da0ddf69c551d528f430bf27ab7f711a9a9d24179e57220a11998e72d3fd';

export default class HomeScreen extends Component {
  state = {
    data: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data });
    } catch (e) {
      throw e;
    }
  };

  render() {
    const { data } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{ backgroundColor: 'grey' }}>
        <Header />
        <ScrollView style={{ marginBottom: 100 }}>
          {data.map(item => (
            <List
              data={item}
              key={item.id}
              onPress={() => navigation.navigate(DETAILS_PAGE, item)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
