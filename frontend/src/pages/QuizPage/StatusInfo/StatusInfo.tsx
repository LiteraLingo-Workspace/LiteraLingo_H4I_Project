import * as S from "./Styles";
import { IoCloseOutline } from "react-icons/io5";
import { theme } from "../../../styles/index";
import { ProgressBar } from "./ProgressBar";
import { StarInfo } from "./StarInfo";

export const StatusInfo: React.FC = () => {
  return (
    <S.Container>
      <IoCloseOutline
        size={40}
        style={{ color: `${theme.colors.secondary}` }}
      />
      <ProgressBar />
      <StarInfo />
    </S.Container>
  );
};
