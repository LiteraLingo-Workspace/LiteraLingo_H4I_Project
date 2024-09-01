import styled from "styled-components";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { TitleContainer } from "./TitleContainer";
import { theme } from "../../common/styles";
import { TypeLabel } from "../../components/TypeLabel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${theme.colors.primary};
  margin-top: 20px;
`;

const OverviewLabelsContainer = styled.div`
  flex-wrap: wrap;
  position: relative;
  width: 363px;
  left: 23px;
  display: flex;
  row-gap: 8px;
  column-gap: 8px;
`;

export const FocalPoint: React.FC = () => {
  return (
    <Container>
      <TitleContainer
        title="Focal Point"
        icon={<PiMagnifyingGlassBold size={24} />}
      />
      <OverviewLabelsContainer>
        <TypeLabel
          color={theme.colors.warmYellow}
          bg={theme.colors.faintYellow}
        >
          Simile
        </TypeLabel>
        <TypeLabel color={theme.colors.warm} bg={theme.colors.faintWarm}>
          Metonymy
        </TypeLabel>
        <TypeLabel
          color={theme.colors.coolDark}
          bg={theme.colors.faintCoolDark}
        >
          Hyperbole
        </TypeLabel>
        <TypeLabel
          color={theme.colors.coolLight}
          bg={theme.colors.faintCoolLight}
        >
          Proverb
        </TypeLabel>
        <TypeLabel color={theme.colors.primary} bg={theme.colors.faintPrimary}>
          Idiom
        </TypeLabel>
      </OverviewLabelsContainer>
    </Container>
  );
};
