import React from 'react';
import { ActivityIndicator } from 'react-native';
import { h } from '../../constants';

const Loader = () => {
  return (
    <ActivityIndicator
      style={{ backgroundColor: 'grey', height: h }}
      size="large"
      color="#00ff00"
    />
  );
};

export { Loader };
