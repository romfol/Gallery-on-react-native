import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, List, Loader, Error } from '../components';
import { DETAILS_PAGE } from '../../constants';
import { connect } from 'react-redux';
import { getApi } from '../actions';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getApi();
  }

  render() {
    const { data, isFetching, error } = this.props.request;
    const { navigation } = this.props;

    return (
      <View style={{ backgroundColor: 'grey' }}>
        <Header />
        {error ? (
          <Error />
        ) : isFetching ? (
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
