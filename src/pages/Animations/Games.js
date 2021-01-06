import React from 'react';
import Lottie  from 'react-lottie';
import animationData from './games.json';

const Games = () => {
  const state = {isStopped: false, isPaused: false}
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };

  return (
    <Lottie
      options={defaultOptions}
      width='350px'
      height='350px'
      isStopped={state.isStopped}
      isPaused={state.isPaused}
    />        
  );
}

export default Games;