import { icons } from './icons';
import { IconType } from './IconType';

export interface ICardImage {
  title: IconType;
  icon: JSX.Element;
}

export const cardsImage: ICardImage[] = [
  {
    title: IconType.Alarm,
    icon: icons.Alarm,
  },
  {
    title: IconType.Pen,
    icon: icons.Pen,
  },
  {
    title: IconType.Bicycle,
    icon: icons.Bicycle,
  },
  {
    title: IconType.Moon,
    icon: icons.Moon,
  },
  {
    title: IconType.Lightbulb,
    icon: icons.Lightbulb,
  },
  {
    title: IconType.Lightning,
    icon: icons.Lightning,
  },
  {
    title: IconType.Cloud,
    icon: icons.Cloud,
  },
  {
    title: IconType.Note,
    icon: icons.Note,
  },
  {
    title: IconType.Coin,
    icon: icons.Coin,
  },
  {
    title: IconType.Compass,
    icon: icons.Compass,
  },
  {
    title: IconType.Controller,
    icon: icons.Controller,
  },
  {
    title: IconType.Cup,
    icon: icons.Cup,
  },
  {
    title: IconType.EmojiSmile,
    icon: icons.EmojiSmile,
  },
  {
    title: IconType.Hammer,
    icon: icons.Hammer,
  },
  {
    title: IconType.Headphones,
    icon: icons.Headphones,
  },
  {
    title: IconType.Umbrella,
    icon: icons.Umbrella,
  },
  {
    title: IconType.Wrench,
    icon: icons.Wrench,
  },
  {
    title: IconType.Sun,
    icon: icons.Sun,
  },
];
