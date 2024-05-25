import styled from "styled-components";
import { TitleContainer } from "./TitleContainer";
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
      <TitleContainer title="Settings" icon={<BsGearWide size={24} />} />
    </Container>
  );
};
