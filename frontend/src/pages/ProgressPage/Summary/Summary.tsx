import * as S from "./Styles";
import { Level } from "./Level";
import { TypeLabel } from "../../../components/TypeLabel/index";
import { theme } from "../../../styles";

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
          text="Metaphor"
        />
      </S.MostPracticedContainer>
    </S.Container>
  );
};
