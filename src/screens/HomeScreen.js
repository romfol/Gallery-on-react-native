import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Header, List, Loader } from '../components';
import { DETAILS_PAGE } from '../../constants';
import { connect } from 'react-redux';
import { getApi } from '../actions';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getApi();
  }

  render() {
    const { data, isFetching } = this.props.request;
    const { navigation } = this.props;

    return (
      <View style={{ backgroundColor: 'grey' }}>
        <Header />
        {isFetching ? (
          <Loader />
        ) : (
          <ScrollView style={{ marginBottom: 100 }}>
            {data.map(item => (
              <List
                data={item}
                key={item.id}
                onPress={() => navigation.navigate(DETAILS_PAGE, item)}
              />
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

const mapStateToProps = store => ({
  request: store.request,
});

const mapDispatchToProps = dispatch => ({
  getApi: () => dispatch(getApi()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
