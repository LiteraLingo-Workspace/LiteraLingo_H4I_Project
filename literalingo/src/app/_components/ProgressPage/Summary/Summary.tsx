import * as S from "./Styles";
import { Level } from "./Level";
import { TypeLabel } from "../../../_components/shared/TypeLabel/TypeLabel";
import { theme } from "../../../../styles";

export const Summary: React.FC = () => {
  return (
    <S.Container>
      <S.StatsContainer>
        <Level />
        <S.ExperienceContainer
          style={{
            width: "100px",
            alignItems: "center",
          }}
        >
          <S.ExperiencePercentLabel>88%</S.ExperiencePercentLabel>
          <S.ExperienceLevelLabel>Lvl 12</S.ExperienceLevelLabel>
        </S.ExperienceContainer>
        <S.ExperienceContainer>
          <p style={{ fontSize: "32px", lineHeight: "40px", fontWeight: 700 }}>
            140 XP
          </p>
          <p style={{ fontSize: "20px", lineHeight: "32px", fontWeight: 700 }}>
            Collected
          </p>
        </S.ExperienceContainer>
      </S.StatsContainer>
      <S.MostPracticedContainer>
        <S.MostPracticedLabel>Most practiced:</S.MostPracticedLabel>
        <TypeLabel
          color={theme.colors.coolAccentBg}
          bg={theme.colors.veryLight}
          text="Metaphor"
        />
      </S.MostPracticedContainer>
    </S.Container>
  );
};
