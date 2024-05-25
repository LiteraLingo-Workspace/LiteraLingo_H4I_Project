import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { theme } from "../../common/styles";
import { ProgressBar } from "./ProgressBar";
import { StarInfo } from "./StarInfo";

const Container = styled.div`
  display: flex;
  height: 34px;
  width: 340px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  gap: 10px;
`;

export const StatusInfo: React.FC = () => {
  return (
    <Container>
      <IoCloseOutline
        size={40}
        style={{ color: `${theme.colors.secondary}` }}
      />
      <ProgressBar />
      <StarInfo />
    </Container>
  );
};
