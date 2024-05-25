import styled from "styled-components";
import { TitleCotainer } from "./TitleContainer";
import { BsGearWide } from "react-icons/bs";
import { theme } from "../../common/styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${theme.colors.primary};
`;

export const Settings: React.FC = () => {
  return (
    <Container>
      <TitleCotainer title="Settings" icon={<BsGearWide size={24} />} />
    </Container>
  );
};
