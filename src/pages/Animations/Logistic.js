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
      width='250px'
      height='250px'
      style={{marginTop:'115px'}}
    />   
  );
}

Logistic.propTypes = {
  state: PropTypes.bool
}

export default Logistic;