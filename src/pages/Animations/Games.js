import React from "react"
import Lottie  from 'react-lottie'
import animationData from './games.json'

const Games = ({ isDesktop }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Lottie
      options={defaultOptions}
      width={isDesktop ? '500px' : '250px'}
      height={isDesktop ? '500px' : '250px'}
    />
  );
}

export default Games;