import styled from "styled-components";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Summary } from "./Summary";
import { Streak } from "./Streak";
import { BottomSheet } from "./BottomSheet";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #64aec6 0%, #5a8bca 100%);
`;

export const ProgressPage: React.FC = () => {
  return (
    <Container>
      <Header title="Your Progress" color="white" />
      <div style={{ position: "absolute", top: "104px", width: "100%" }}>
        <Summary />
        <Streak />
        <BottomSheet />
      </div>
      <Navbar />
    </Container>
  );
};
