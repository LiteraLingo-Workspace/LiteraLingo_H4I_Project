import * as S from "./Styles";
import { theme } from "../../styles";

export const TypeLabel: React.FC = () => {
  return (
    <S.TypeLabel color={theme.colors.faintBlue} bg={theme.colors.success}>
      Test
    </S.TypeLabel>
  );
};
