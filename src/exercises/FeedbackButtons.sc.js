import styled from "styled-components";

const FeedbackHolder = styled.div`
  display: flex;
  background-color: rgba(211, 211, 211, 0.139);
  border: 1px solid rgba(128, 128, 128, 0.228);
  border-radius: 0.5em;

  width: 100%;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;

const FeedbackButtonsHolder = styled.div`
  display: flex;

  width: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const FeedbackButton = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  color: #000000;

  margin: 0.3em;

  font-size: 0.875em;
  background-color: #ffd04740;
  border-style: none;
  border-radius: 0.65em;
  padding: 0.5em;
  user-select: none;
  outline: none;

  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;

  &.selected {
    background-color: #ffbb54;
    border: 0.125em solid #ffbb54;
  }
`;

const FeedbackSelector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -1em;
`;

const FeedbackLabel = styled.label`
  font-size: 0.875em;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0.3em;
`;

const FeedbackInstruction = styled.p`
  font-size: 0.875em;
  margin-left: 0.5em;
`;

const FeedbackForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FeedbackInput = styled.input`
  margin-left: 1em;
`;

const FeedbackSubmit = styled.input`
  cursor: pointer;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  color: #000000;

  margin: 0.3em;

  font-size: 0.875em;
  background-color: #ffd04740;
  border: 0.1em solid #ffd047;
  box-shadow: none;
  border-radius: 0.65em;
  padding: 0.5em;
  user-select: none;
  outline: none;

  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
`;

export {
  FeedbackHolder,
  FeedbackButtonsHolder,
  FeedbackButton,
  FeedbackLabel,
  FeedbackSelector,
  FeedbackInstruction,
  FeedbackForm,
  FeedbackInput,
  FeedbackSubmit,
};
