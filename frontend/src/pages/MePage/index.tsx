import styled from "styled-components";
import { Header } from "../../common/components/Header";
import { UserInfo } from "./UserInfo";
import { Overview } from "./Overview";
import { FocalPoint } from "./FocalPoint";
import { Settings } from "./Settings";
import { Background } from "./Background";
import { Navbar } from "../../common/components/Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MePage: React.FC = () => {
  return (
    <Container>
      <Background />
      <Header title="Your Profile" />
      <div style={{ position: "absolute", top: "104px", width: "344px" }}>
        <UserInfo />
        <Overview />
        <FocalPoint />
        <Settings />
      </div>
      <Navbar />
    </Container>
  );
};
