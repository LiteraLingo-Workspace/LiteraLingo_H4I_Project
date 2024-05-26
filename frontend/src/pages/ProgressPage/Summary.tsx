import styled from "styled-components";
import { Level } from "./Level";

const Container = styled.div`
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
  margin-top: 10px;
`;

export const Summary: React.FC = () => {
  return (
    <Container>
      <Level />
      <ExperienceContainer
        style={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
        <p style={{ fontSize: "32px", lineHeight: "45px", fontWeight: 700 }}>
          140 XP
        </p>
        <p style={{ fontSize: "20px", lineHeight: "32px", fontWeight: 700 }}>
          Collected
        </p>
      </ExperienceContainer>
    </Container>
  );
};
