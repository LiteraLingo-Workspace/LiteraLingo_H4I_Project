import styled from "styled-components";
import { Level } from "./Level";
import { TypeLabel } from "../../components/TypeLabel";
import { theme } from "../../common/styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  left: 30px;
  gap: 25px;
  margin-top: 10px;
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Baloo 2", sans-serif;
  color: white;
  margin-top: 15px;
`;

const MostPracticedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-top: 20px;
  left: 30px;
  gap: 10px;
`;

export const Summary: React.FC = () => {
  return (
    <Container>
      <StatsContainer>
        <Level />
        <ExperienceContainer
          style={{
            width: "100px",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "20px", lineHeight: "24px", fontWeight: 600 }}>
            88%
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "16px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Lvl 12
          </p>
        </ExperienceContainer>
        <ExperienceContainer>
          <p style={{ fontSize: "32px", lineHeight: "40px", fontWeight: 700 }}>
            140 XP
          </p>
          <p style={{ fontSize: "20px", lineHeight: "32px", fontWeight: 700 }}>
            Collected
          </p>
        </ExperienceContainer>
      </StatsContainer>
      <MostPracticedContainer>
        <p
          style={{
            fontFamily: "Baloo 2, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "32px",
            color: "white",
          }}
        >
          Most practiced:
        </p>
        <TypeLabel
          color={theme.colors.coolAccentBg}
          bg={theme.colors.veryLight}
        >
          Metaphor
        </TypeLabel>
      </MostPracticedContainer>
    </Container>
  );
};
