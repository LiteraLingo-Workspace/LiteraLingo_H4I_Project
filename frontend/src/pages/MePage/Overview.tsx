import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import { TitleCotainer } from "./TitleContainer";
import { theme } from "../../common/styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${theme.colors.primary};
`;

export const Overview: React.FC = () => {
  return (
    <Container>
      <TitleCotainer title="Overview" icon={<FaRegUser size={24} />} />
    </Container>
  );
};
