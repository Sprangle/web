import styled from "styled-components";
import { zeeguuOrange, almostBlack } from "../components/colors";

const SearchField = styled.div`
  margin-bottom: 1em;
  margin-left: 1em;

  display: inline-block;

  .searchTextfieldInput {
    font-weight: 400;
    font-size: small;
  }
`;

const SearchInput = styled.input`
  all: unset;
  border: 0.15em solid ${zeeguuOrange};
  border-radius: 0.9375em;
  padding: 0.125em;
  padding-left: 0.5em;
  padding-right: 5px;
  font-family: Montserrat;
  font-weight: 300;
  font-size: 0.875em;
  height: 1.5em;
  width: ${(props) => (props.isFocused || props.hasValue ? "400px" : "150px")};
  &:focus {
    border: 0.15em solid ${almostBlack};
    font-weight: 500 !important;
  }
`;

export { SearchField, SearchInput };
