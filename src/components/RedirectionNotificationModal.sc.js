import {
  ModalWrapperGlobal,
  CloseButtonGlobal,
  ModalHeaderGlobal,
  ModalBodyGlobal,
  ModalFooterGlobal,
} from "./ModalGlobalStyling.sc";
import { zeeguuDarkOrange } from "./colors";
import { OrangeRoundButton } from "./allButtons.sc";
import styled from "styled-components";

const ModalWrapper = styled(ModalWrapperGlobal)`
  label {
    font-size: 0.9em;
    align-self: start;
    margin-top: -1em;
  }
`;

const Header = styled(ModalHeaderGlobal)``;

const Body = styled(ModalBodyGlobal)``;

const Footer = styled(ModalFooterGlobal)``;

const CloseButton = styled(CloseButtonGlobal)``;

const Icon = styled.div`
  height: 1em;
  width: 1em;
  margin: 0 0.2em;
  display: inline-block;
`;

//redesigned button for a better focal point and improved
//readability of the text inside it.
//TODO: After implementing all the onboarding steps,
//create style quide for all buttons and refactor / factor them out
const GoToArticleButton = styled(OrangeRoundButton)`
  padding: 0.7em 2em;
  border-radius: 4em;
  font-weight: 600;
  border-bottom: solid 0.2em ${zeeguuDarkOrange};
`;

export {
  ModalWrapper,
  CloseButton,
  GoToArticleButton,
  Icon,
  Header,
  Body,
  Footer,
};
