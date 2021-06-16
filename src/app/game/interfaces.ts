export interface DifficultySize {
  size: number;
}

export interface GameCardProps {
  isFront: boolean;
  appearDelay: number;
}

export interface IGameCard {
  icon: JSX.Element;
  isFront: boolean;
  isMatch: boolean;
  title: string;
}
