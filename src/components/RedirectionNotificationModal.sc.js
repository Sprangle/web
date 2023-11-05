import {
  ModalWrapperGlobal,
  CloseButtonGlobal,
  ModalHeaderGlobal,
  ModalBodyGlobal,
  ModalFooterGlobal,
  ModalStrongTextWrapperGlobal,
} from "./ModalGlobalStyling.sc";
import { zeeguuDarkOrange, zeeguuOrange } from "./colors";
import { OrangeRoundButton } from "./allButtons.sc";
import styled from "styled-components";

const ModalWrapper = styled(ModalWrapperGlobal)``;

const Header = styled(ModalHeaderGlobal)``;

const Body = styled(ModalBodyGlobal)``;

const Footer = styled(ModalFooterGlobal)``;

const CloseButton = styled(CloseButtonGlobal)``;

const ModalStrongTextWrapper = styled(ModalStrongTextWrapperGlobal)``;

const Icon = styled.span`
  height: 1em;
  width: 1em;
  max-width: 2em;
  margin: 0 0.2em;
  display: inline-block;
`;

const CheckboxWrapper = styled.div`
  margin-top: -0.8em;
  align-self: start;
  display: grid;
  grid-template-columns: 1em auto;
  align-items: center;
  gap: 0.5em;
  @media (max-width: 576px) {
    margin-top: -0.5em;
  }
  label {
    font-size: 0.9em;
  }
  input[type="checkbox"] {
    width: 1.2em;
    height: 1.2em;
    accent-color: ${zeeguuOrange};
    @media (max-width: 576px) {
      width: 1rem;
      height: 1rem;
    }
  }
`;

//redesigned button for a better focal point and improved
//readability of the text inside it.
//TODO: After implementing all the onboarding steps,
//create style quide for all buttons and refactor / factor them out
const GoToArticleButton = styled(OrangeRoundButton)`
  flex: 1;
  padding: 0.7em 2em;
  border-radius: 4em;
  font-weight: 600;
  border-bottom: solid 0.2em ${zeeguuDarkOrange};
`;

const SaveArticleButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
  color: orange;
  background-color: none;
  font: inherit;
  text-align: left;
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: none;
  border: none;
  font-weight: 600;

  @media (max-width: 576px) {
    justify-content: center;
    margin-left: -0.5em;
    flex: 0;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export {
  ModalWrapper,
  CloseButton,
  GoToArticleButton,
  SaveArticleButton,
  ButtonContainer,
  Icon,
  Header,
  Body,
  Footer,
  CheckboxWrapper,
  ModalStrongTextWrapper,
};
