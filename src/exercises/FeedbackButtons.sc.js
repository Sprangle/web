import styled from "styled-components";

const FeedbackLinkHolder = styled.div`
  text-align: center;
  width: 100%;
  margin: 1em;

  .discrete-link {
    color: lightgray;
  }
`;

const FeedbackButtonsHolder = styled.div`
  display: flex;
  background-color: rgba(211, 211, 211, 0.139);
  border: 1px solid rgba(128, 128, 128, 0.228);
  border-radius: 00.5em;

  width: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  button {
    margin: 0.5em;
    font-size: large;
  }
`;
export { FeedbackLinkHolder, FeedbackButtonsHolder };
