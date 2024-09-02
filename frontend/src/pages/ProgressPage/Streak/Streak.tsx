import * as S from "./Styles";
import { Date } from "./Date";

export const Streak: React.FC = () => {
  return (
    <S.Container>
      <S.StreakLabel>5 Day Streak!</S.StreakLabel>
      <S.SubContainer>
        <Date month="Nov" day={23} streakActive={true} today={false} />
        <Date month="Nov" day={24} streakActive={true} today={false} />
        <Date month="Nov" day={25} streakActive={true} today={true} />
        <Date month="Nov" day={26} streakActive={false} today={false} />
        <Date month="Nov" day={27} streakActive={false} today={false} />
      </S.SubContainer>
    </S.Container>
  );
};
