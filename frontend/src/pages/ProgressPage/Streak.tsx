import styled from "styled-components";
import { Date } from "./Date";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 10px;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Streak: React.FC = () => {
  return (
    <Container>
      <p
        style={{
          fontFamily: "Quicksand, sans-serif",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "32px",
        }}
      >
        5 Day Streak!
      </p>
      <DateContainer>
        <Date month="Nov" day={23} streakActive={true} />
        <Date month="Nov" day={24} streakActive={true} />
        <Date month="Nov" day={25} streakActive={true} today={true} />
        <Date month="Nov" day={26} streakActive={false} />
        <Date month="Nov" day={27} streakActive={false} />
      </DateContainer>
    </Container>
  );
};
