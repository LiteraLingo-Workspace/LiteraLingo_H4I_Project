import styled from "styled-components";
import { theme } from "../../../styles/index";

const Container = styled.div`
  display: flex;
  height: 34px;
  width: 340px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  gap: 10px;
`;

const ProgressContainer = styled.div`
  display: flex;
  height: 16px;
  width: 234px;
  justify-content: center;
  align-items: center;
  border-radius: 38px;
  background-color: rgba(229, 229, 229, 1);
`;

const Progress = styled.div`
  height: 100%;
  width: 37.17%;
  margin-right: auto;
  border-radius: 38px;
  background-color: ${theme.colors.coolAccentBg};
`;

const Shine = styled.div`
  height: 5px;
  width: 37.17%;
  position: relative;
  top: 4px;
  left: 9px;
  border-radius: 38px;
  background-color: rgba(90, 198, 234, 1);
`;

const StarInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.warmYellow};
  font-weight: 700;
  font-size: 24px;
  line-height: 32.74px;
  gap: 3px;
`;

export { Container, ProgressContainer, Progress, Shine, StarInfoContainer };
