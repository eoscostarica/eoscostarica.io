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
      height='325px'
    />
  );
}

Payments.propTypes = {
  state: PropTypes.bool
}

export default Payments;