import React from 'react';
import PropTypes from 'prop-types';
import Lottie  from 'react-lottie';
import animationData from './logistic.json';

const Logistic = ({
  state
}) => {
  const defaultOptions = {
    loop: 5,
    autoplay: state,
    animationData: animationData
  };

  return (
    <Lottie
      options={defaultOptions}
    />   
  );
}

Logistic.propTypes = {
  state: PropTypes.bool
}

export default Logistic;