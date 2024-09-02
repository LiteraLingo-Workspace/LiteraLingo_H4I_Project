import styled from "styled-components";
import { theme } from "../../../styles/index";

interface Props {
  expanded: boolean;
}

const Container = styled.div<Props>`
  position: absolute;
  height: 723px;
  width: 100%;
  z-index: 1;
  overflow: auto;
  border-radius: 16px 16px 0 0;
  top: ${(p) => (p.expanded ? 355 : 220)}px;
`;

const TabContainer = styled.div`
  position: fixed;
  height: 80px;
  width: 100%;
  background-color: white;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  width: 335px;
  color: white;
  background-color: transparent;
  font-family: "Baloo 2", sans-serif;
  position: relative;
  top: 10px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 32.04px;
  color: ${theme.colors.primary};
`;

const SubTitle = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 10.83px;
  color: ${theme.colors.secondary};
`;

const MainContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 0px 24px 80px 24px;
  gap: 5px;
  min-height: 500px;
  margin-top: 65px;
  border-bottom: 15px solid ${theme.colors.coolAccentBg};
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 15px;
  left: -30px !important;
`;

const StatusTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export {
  Container,
  TabContainer,
  TextContainer,
  Title,
  SubTitle,
  MainContentsContainer,
  StatusContainer,
  StatusTextContainer,
};
