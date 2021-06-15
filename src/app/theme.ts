import { DefaultTheme } from 'styled-components';

interface OpacityColor {
  (opacity?: number): string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    opacityGrey: OpacityColor;
    white: string;
    opacityLighterGrey: OpacityColor;
    blueLimeGradient: string;
    lime: string;
    lightBlue: string;
    gold: string;
    goldGradient: string;
  }
}

export const theme: DefaultTheme = {
  opacityGrey: (opacity = 1) => `rgba(54, 54, 54, ${opacity})`,
  white: '#ffffff',
  opacityLighterGrey: (opacity = 1) => `rgba(107, 107, 107, ${opacity})`,
  blueLimeGradient: 'linear-gradient(to right, #11998e,#38ef7d)',
  lime: '#11998e',
  lightBlue: '#1d89ff',
  gold: '#f5e000',
  goldGradient:
    'linear-gradient(90deg, rgba(255,235,1,1) 0%, rgba(185,255,0,1) 100%)',
};
