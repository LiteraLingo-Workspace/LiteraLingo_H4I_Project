import * as S from "./Styles";

export const Prompt: React.FC = () => {
  return (
    <S.Container>
      <p
        style={{
          fontFamily: "Baloo 2, sans-serif",
          fontWeight: 600,
          fontSize: "23px",
          lineHeight: "36.85px",
          textAlign: "center",
          color: "white",
        }}
      >
        Her word had the strength of titanium.
      </p>
    </S.Container>
  );
};
