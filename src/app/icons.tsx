import {
  PauseFill,
  XLg,
  ChevronLeft,
  Clock,
  ArrowRepeat,
  PlayFill,
} from 'react-bootstrap-icons';

import { IconType } from './IconType';

export const icons: Record<IconType, JSX.Element> = {
  [IconType.Cross]: <XLg viewBox="-0.5 0 16 16" />,
  [IconType.ArrowLeft]: <ChevronLeft viewBox="-0.5 0.5 16 16" />,
  [IconType.Pause]: <PauseFill viewBox="-0.5 0 16 16" />,
  [IconType.Clock]: <Clock viewBox="-0.5 0 16 16" />,
  [IconType.Restart]: <ArrowRepeat viewBox="-0.5 0 16 16" />,
  [IconType.Play]: <PlayFill viewBox="-1 0 16 16" />,
};
