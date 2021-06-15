import { useState } from 'react';

const startTime = 0;

const minVolume = 0;
const maxVolume = 100;

export const useSound = (url: string) => {
  const [sound] = useState(new Audio(url));

  const playSound = () => {
    sound.currentTime = startTime;
    sound.play();
  };

  const volumeOff = () => {
    sound.volume = minVolume;
  };

  const volumeOn = () => {
    sound.volume = maxVolume;
  };

  return [playSound, volumeOff, volumeOn];
};
