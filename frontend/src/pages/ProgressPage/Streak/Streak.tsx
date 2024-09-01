import * as S from "./Styles";
import { Date } from "./Date";

export const Streak: React.FC = () => {
  return (
    <S.Container>
      <p
        style={{
          fontFamily: "Quicksand, sans-serif",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "32px",
        }}
      >
        5 Day Streak!
      </p>
      <S.SubContainer>
        <Date month="Nov" day={23} streakActive={true} />
        <Date month="Nov" day={24} streakActive={true} />
        <Date month="Nov" day={25} streakActive={true} today={true} />
        <Date month="Nov" day={26} streakActive={false} />
        <Date month="Nov" day={27} streakActive={false} />
      </S.SubContainer>
    </S.Container>
  );
};
