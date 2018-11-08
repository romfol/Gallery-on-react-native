import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, List } from '../components';
import { DETAILS_PAGE } from '../../constants';
import { connect } from 'react-redux';
import { getApi } from '../actions';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getApi();
  }

  render() {
    const { data } = this.props;
    const { navigation } = this.props;
    console.log('1111111111111111111111', data);
    return (
      <View style={{ backgroundColor: 'grey' }}>
        <Header />
        <ScrollView style={{ marginBottom: 100 }}>
          {data.map(item => (
            <List
              data={item}
              key={item.id}
              onPress={() => navigation.navigate(DETAILS_PAGE, item)} //
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = store => ({
  data: store.request.data,
});

const mapDispatchToProps = dispatch => {
  return {
    getApi: () => dispatch(getApi()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
