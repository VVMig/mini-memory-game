import styled from 'styled-components';

import { Underline, Modal } from '../../../packages';
import { Button } from '../../../packages';
import { Breakpoints } from '../../Breakpoints';
import { squareSize } from '../../helpers';

const desktopSquareSize = 450;
const phoneSquareSize = 300;
const smallPhoneSquareSize = 210;

const Rules = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const RulesUnderline = styled(Underline)`
  background-color: ${({ theme }) => theme.lightBlue};
`;

const RulesToggle = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.lightBlue};
  cursor: pointer;

  @media (max-width: ${Breakpoints.Phone}px) {
    font-size: 10px;
  }

  &:hover {
    ~ ${RulesUnderline} {
      width: 100%;
    }
  }
`;

const RulesModal = styled(Modal)`
  display: grid;
  place-items: center;
  text-align: center;
  padding: 10px;
  ${squareSize(desktopSquareSize)};
  font-size: 18px;
  color: ${({ theme }) => theme.opacityLighterGrey()};

  background-color: ${({ theme }) => theme.white};

  @media (max-width: ${Breakpoints.Phone}px) {
    ${squareSize(phoneSquareSize)};
    padding: 0 5px;
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    ${squareSize(smallPhoneSquareSize)};
    padding: 0 5px;
    font-size: 12px;
  }
`;

const RulesButton = styled(Button)`
  @media (max-width: ${Breakpoints.Phone}px) {
    padding: 9px 0;
    font-size: 12px;
    width: 150px;
    & span {
      font-size: 14px;
    }
  }

  @media (max-width: ${Breakpoints.SmallPhone}px) {
    padding: 8px 0;
    width: 120px;
    & span {
      font-size: 12px;
    }
  }
`;

export const Styled = {
  Rules,
  RulesToggle,
  RulesUnderline,
  RulesModal,
  RulesButton,
};
