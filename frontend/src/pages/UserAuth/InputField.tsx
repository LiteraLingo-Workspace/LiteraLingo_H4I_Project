import styled from "styled-components";
import { theme } from "../../common/styles/index";

export const InputField = styled.input`
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  border: 2px solid ${theme.colors.primary};
  border-radius: 8px;
  padding: 5px 6px;
  border-width: 1px;
  margin-bottom: 48px;
  width: calc(100% - 16px);
  &::placeholder {
    color: ${theme.colors.secondary};
    font-family: Poppins, sans-serif;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${theme.colors.coolDark};
  }
`;
