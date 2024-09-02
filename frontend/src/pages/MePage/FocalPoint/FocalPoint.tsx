import * as S from "./Styles";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { TitleContainer } from "../TitleContainer";
import { theme } from "../../../styles";
import { TypeLabel } from "../../../components/TypeLabel/index";

export const FocalPoint: React.FC = () => {
  return (
    <S.Container>
      <TitleContainer
        title="Focal Point"
        icon={<PiMagnifyingGlassBold size={24} />}
      />
      <S.OverviewLabelsContainer>
        <TypeLabel
          color={theme.colors.warmYellow}
          bg={theme.colors.faintYellow}
          text="Simile"
        />
        <TypeLabel
          color={theme.colors.warm}
          bg={theme.colors.faintWarm}
          text="Metonymy"
        />
        <TypeLabel
          color={theme.colors.coolDark}
          bg={theme.colors.faintCoolDark}
          text="Hyperbole"
        />
        <TypeLabel
          color={theme.colors.coolLight}
          bg={theme.colors.faintCoolLight}
          text="Proverb"
        />
        <TypeLabel
          color={theme.colors.primary}
          bg={theme.colors.faintPrimary}
          text="Idiom"
        />
      </S.OverviewLabelsContainer>
    </S.Container>
  );
};
