import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import { TitleContainer } from "./TitleContainer";
import { theme } from "../../common/styles";
import { OverviewLabel } from "./OverviewLabel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${theme.colors.primary};
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

export const Overview: React.FC = () => {
  return (
    <Container>
      <TitleContainer title="Overview" icon={<FaRegUser size={24} />} />
      <OverviewLabelsContainer>
        <OverviewLabel>5 day streak</OverviewLabel>
        <OverviewLabel>243 hours spent</OverviewLabel>
        <OverviewLabel>13244 XP</OverviewLabel>
        <OverviewLabel>Lvl. 14</OverviewLabel>
      </OverviewLabelsContainer>
    </Container>
  );
};
