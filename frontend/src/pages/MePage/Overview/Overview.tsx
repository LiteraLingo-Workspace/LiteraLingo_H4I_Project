import * as S from "./Styles";
import { FaRegUser } from "react-icons/fa";
import { TitleContainer } from "../TitleContainer/index";

export const Overview: React.FC = () => {
  return (
    <S.Container>
      <TitleContainer title="Overview" icon={<FaRegUser size={24} />} />
      <S.OverviewLabelsContainer>
        <S.OverviewLabel>5 day streak</S.OverviewLabel>
        <S.OverviewLabel>243 hours spent</S.OverviewLabel>
        <S.OverviewLabel>13244 XP</S.OverviewLabel>
        <S.OverviewLabel>Lvl. 14</S.OverviewLabel>
      </S.OverviewLabelsContainer>
    </S.Container>
  );
};
