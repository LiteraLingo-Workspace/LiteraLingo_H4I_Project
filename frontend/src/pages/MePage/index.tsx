import styled from "styled-components";
import { Header } from "../../common/components/Header";
import { UserInfo } from "./UserInfo";
import { Overview } from "./Overview";
import { FocalPoint } from "./FocalPoint";
import { Settings } from "./Settings";
import { Background } from "./Background";
import { Navbar } from "../../common/components/Navbar";
import { theme } from "../../common/styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const MePage: React.FC = () => {
  return (
    <Container>
      <Background />
      <Header title="Your Profile" color={theme.colors.primary} />
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
