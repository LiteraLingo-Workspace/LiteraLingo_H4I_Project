import styled from "styled-components";
import { theme } from "../../common/styles/index";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 48px;
`;

const Label = styled.p`
  color: ${theme.colors.primary};
  padding: 0;
  margin: 0;
`;

const Title = styled(Label)`
  font-size: 24px;
  flex-grow: 1;
  font-weight: 700;
  text-align: left;
  line-feight: 40px;
`;

const Container = styled.div`
  background: white;
  width: 344px;
  border-radius: 16px;
  padding: 24px;
  padding-top: 15px;
  box-sizing: border-box;
  z-index: 1;
`;

const InputField = styled.input`
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

const Button = styled.button`
  float: right;
  border: none;
  border-radius: 24px;
  gap: 4px;
  height: 48px;
  padding: 8px 16px 8px 16px;
  background: linear-gradient(180deg, #64aec6 0%, #5a8bca 100%);
  color: white;
  cursor: pointer;
  color: white;
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
`;

export { FlexRow, Label, Title, Container, InputField, Button };
