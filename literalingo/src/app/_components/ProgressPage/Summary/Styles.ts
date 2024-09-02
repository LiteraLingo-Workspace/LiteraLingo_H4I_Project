import styled from "styled-components";

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

const ExperienceLevelLabel = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
`;

const ExperiencePercentLabel = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
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

const MostPracticedLabel = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: white;
`;

const LevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: 100px;
  width: 100px;
`;

export {
  Container,
  StatsContainer,
  ExperienceContainer,
  ExperienceLevelLabel,
  ExperiencePercentLabel,
  MostPracticedContainer,
  MostPracticedLabel,
  LevelContainer,
};
