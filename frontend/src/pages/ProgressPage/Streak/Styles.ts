import styled from "styled-components";
import { theme } from "../../../styles/index";

interface Props {
  today: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 10px;
`;

const StreakLabel = styled.p`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

const Day = styled.p`
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30.24px;
`;

const Month = styled.p`
  font-family: "Outfit", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17.64px;
  margin-bottom: 5px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const DateContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.primary};
  margin-top: 10px;
  width: 61px;
  border-radius: 40px;
  background-color: rgba(216, 231, 236, 0.8);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: ${(p) => (p.today ? 127 : 99)}px;
  background-color: ${(p) =>
    p.today ? theme.colors.warmYellow : "rgba(216, 231, 236, 0.8)"};
`;

export { Container, StreakLabel, Day, Month, SubContainer, DateContainer };
