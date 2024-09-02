import styled from "styled-components";
import { theme } from "../../../styles/index";

const Container = styled.div`
  color: ${theme.colors.primary};
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 16px;
  height: 64px;
  width: 100%;
  padding: 16px 24px;
  box-shadow: 0px 0px 40px 0px rgba(152, 168, 186, 0.2);
  box-sizing: border-box;
  margin-bottom: 4.1%;
`;

const Text = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 32.04px;
`;

const ArrowContainer = styled.div`
  height: 32px;
  width: 48px;
  border-radius: 16px;
  background-color: ${theme.colors.faintBlue};
  padding: 4px 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TBoxContainer = styled.div`
  color: ${theme.colors.primary};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 16px;
  border: 2px solid ${theme.colors.coolDark};
  box-shadow: 0px 4px 0px 0px rgba(100, 174, 198, 1);
  height: 344px;
  width: 100%;
  padding: 16px 24px;
  box-sizing: border-box;
`;

const SubContainer = styled.div`
  width: 312px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 256px;
  width: 100%;
  gap: 8px;
`;

const TextField = styled.textarea`
  color: ${theme.colors.primary};
  resize: none;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  border: none;
  outline: none;
  &::placeholder {
    color: ${theme.colors.secondary};
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }
`;

const Result = styled.p`
  font-family: "Poppins", sans-serif;
  color: black;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid ${theme.colors.faintGrey};
  height: 48px;
  width: 100%;
  justify-content: space-between;
`;

const InnerButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: relative;
  padding-top: 10px;
  align-items: center;
  color: ${theme.colors.coolDark};
`;

const GoButton = styled.button`
  border-radius: 100px;
  padding: 8px 12px 8px 12px;
  height: 38px;
  width: 85px;
  background-color: ${theme.colors.warm};
  display: flex;
  align-items: center;
  color: white;
  font-family: Baloo 2, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  border: none;
  cursor: pointer;
  gap: 10px;
  margin-top: auto;
`;

const RestartButton = styled.button`
  border-radius: 100px;
  padding: 8px 12px 8px 12px;
  height: 38px;
  width: 130px;
  background-color: ${theme.colors.warm};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Baloo 2, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  border: none;
  cursor: pointer;
  gap: 5px;
  margin-top: auto;
`;

const Label = styled.p`
  color: ${theme.colors.secondary};
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
`;

const Break = styled.div`
  height: 1px;
  width: 312px;
  background-color: ${theme.colors.faintGrey};
  margin-top: 8px;
  margin-bottom: 4px;
`;

export {
  Container,
  Text,
  ArrowContainer,
  TBoxContainer,
  SubContainer,
  TextContainer,
  TextField,
  Result,
  ButtonsContainer,
  InnerButtonsContainer,
  GoButton,
  RestartButton,
  Label,
  Break,
};
