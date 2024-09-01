import styled from "styled-components";
import { theme } from "../../styles/index";

const PositionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  position: fixed;
  bottom: 23px;
  height: 72px;
  width: 330px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  padding: 4px 8px 4px 8px;
  background: rgba(255, 255, 255, 0.6);
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  box-shadow: 0 0 40px #98a8ba33;
  z-index: 10;
`;

const LinkContainer = styled.div`
  height: 83px;
  width: 56px;
  display: flex;
  justify-content: center;
  color: ${theme.colors.primary};
  cursor: pointer;
`;

const Text = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  line-height: 22px;
  font-weight: 500;
  position: absolute;
  top: 51px;
`;

const HomeIconBackground = styled.div`
  width: 61px;
  height: 56px;
  position: relative;
  top: 3.5px;
  border-radius: 30.5px;
  background: #f37576;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  PositionContainer,
  Container,
  LinkContainer,
  Text,
  HomeIconBackground,
};
