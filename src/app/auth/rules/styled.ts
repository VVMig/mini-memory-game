import styled from "styled-components";

import { Underline, Modal } from "../../../packages";
import { squareSize } from "../../helpers";

const deckstopSize = 450;

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
  position: relative;
  cursor: pointer;

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
  ${squareSize(deckstopSize)};
  font-size: 22px;
  color: ${({ theme }) => theme.opacityLighterGrey()};
  
  background-color: ${({ theme }) => theme.white};
`
export const Styled = {
  Rules,
  RulesToggle,
  RulesUnderline,
  RulesModal,
}