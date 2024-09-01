import * as S from "./Styles";
import { avatar } from "../../../assets/index";

export const Welcome: React.FC = () => {
  return (
    <S.Container>
      <img
        style={{ height: "80px", width: "75.35px", borderRadius: "100px" }}
        src={avatar}
      />
      <S.NameContainer>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          Welcome
        </p>
        <p
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: "500",
            fontSize: "32px",
            marginTop: "-10px",
          }}
        >
          Anna
        </p>
      </S.NameContainer>
    </S.Container>
  );
};
