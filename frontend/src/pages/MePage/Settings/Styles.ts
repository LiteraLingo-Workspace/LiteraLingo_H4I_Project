import styled from "styled-components";
import { theme } from "../../../styles/index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${theme.colors.primary};
  margin-top: 20px;
`;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 30px;
  gap: 27px;
`;

const SettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 69px;
  width: 281px;
  background-color: ${theme.colors.veryLight};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

const SettingName = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 25.63px;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
  justify-content: center;
`;

const Bar = styled.div`
  background-color: white;
  color: ${theme.colors.secondary};
  height: 17px;
  width: 160px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${theme.colors.primary};
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
`;

export {
  Container,
  SettingsContainer,
  SettingContainer,
  InputContainer,
  SettingName,
  SliderContainer,
  Bar,
  Button,
};
