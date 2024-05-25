import styled from "styled-components";
import { Header } from "../../common/components/Header";
import { UserInfo } from "./UserInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MePage: React.FC = () => {
  return (
    <Container>
      <Header title="Your Profile" />
      <UserInfo />
    </Container>
  );
};
