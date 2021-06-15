import { useEffect, useState } from 'react';

const startTime = 0;

interface IUseSound {
  (url: string): [playSound: () => void, mute: (muteState: boolean) => void];
}

export const useSound: IUseSound = (url: string) => {
  const [sound] = useState(new Audio(url));
  const [isMute, setIsMute] = useState(false);

  const playSound = () => {
    sound.currentTime = startTime;
    sound.play();
  };

  useEffect(() => {
    sound.volume = +isMute;
  }, [isMute]);

  const mute = (muteState: boolean) => {
    setIsMute(muteState);
  };

  return [playSound, mute];
};
