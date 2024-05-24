import styled from "styled-components";
import { FaRegStar, FaRegUser } from "react-icons/fa";
import { PiChartLineUp } from "react-icons/pi";
import { BsQuestion } from "react-icons/bs";
import { BiSolidMagicWand } from "react-icons/bi";
import { theme } from "../styles";

const Container = styled.div`
  position: fixed;
  bottom: 23px;
  height: 70px;
  width: 330px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  padding: 4px 8px 4px 8px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid red;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.primary};
`;

const Text = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  line-height: 22px;
  font-weight: 500;
`;

export const Navbar: React.FC = () => {
  return (
    <Container>
      <LinkContainer>
        <PiChartLineUp size={32} />
        <Text>Progress</Text>
      </LinkContainer>
      <LinkContainer>
        <BsQuestion size={32} />
        <Text>Quiz</Text>
      </LinkContainer>
      <LinkContainer>
        <BiSolidMagicWand size={32} />
        <Text>Home</Text>
      </LinkContainer>
      <LinkContainer>
        <FaRegStar size={32} />
        <Text>Saved</Text>
      </LinkContainer>
      <LinkContainer>
        <FaRegUser size={32} />
        <Text>Me</Text>
      </LinkContainer>
    </Container>
  );
};
