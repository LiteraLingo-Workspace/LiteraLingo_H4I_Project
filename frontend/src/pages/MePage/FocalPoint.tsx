import styled from "styled-components";
import { TitleCotainer } from "./TitleContainer";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { theme } from "../../common/styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${theme.colors.primary};
`;

export const FocalPoint: React.FC = () => {
  return (
    <Container>
      <TitleCotainer
        title="Focal Point"
        icon={<PiMagnifyingGlassBold size={24} />}
      />
    </Container>
  );
};
