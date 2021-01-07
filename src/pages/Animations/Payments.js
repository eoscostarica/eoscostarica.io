import React from 'react';
import PropTypes from 'prop-types';
import Lottie  from 'react-lottie';
import animationData from './payments.json';

const Payments = ({
  state
}) => {
  const defaultOptions = {
    loop: 4,
    autoplay: state,
    animationData: animationData
  };

  return (
    <Lottie
      options={defaultOptions}
      width='225px'
      height='225px'
      style={{marginTop:'110px'}}
    />
  );
}

Payments.propTypes = {
  state: PropTypes.bool
}

export default Payments;