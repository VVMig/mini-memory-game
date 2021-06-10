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
  }
}

export const theme: DefaultTheme = {
  opacityGrey: (opacity = 1) => `rgba(54, 54, 54, ${opacity})`,
  white: '#ffffff',
  opacityLighterGrey: (opacity = 1) => `rgba(107, 107, 107, ${opacity})`,
  blueLimeGradient: 'linear-gradient(to right, #11998e,#38ef7d)',
  lime: '#11998e',
  lightBlue: '#1d89ff',
};
