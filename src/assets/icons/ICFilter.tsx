import {Colors} from '@themes';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ICFilter = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <Path d="M12 12l8-8V0H0v4l8 8v8l4-4v-4z" fill={Colors.blue} />
    </Svg>
  );
};

export default ICFilter;
