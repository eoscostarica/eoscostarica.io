import React from "react";
import PropTypes from 'prop-types';
import Lottie  from 'react-lottie';
import animationData from './games.json';

const Games = ({
  state
}) => {
  const defaultOptions = {
    loop: 4,
    autoplay: state,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Lottie
      options={defaultOptions}
      width='350px'
      height='350px'
    />
  );
}

Games.propTypes = {
  state: PropTypes.bool
}

export default Games;