import React from 'react';
import { ActivityIndicator } from 'react-native';
import { w, h } from '../../constants';

const Loader = () => {
  return (
    <ActivityIndicator
      style={{ backgroundColor: 'grey', width: w, height: h }}
      size="large"
      color="#00ff00"
    />
  );
};

export { Loader };
