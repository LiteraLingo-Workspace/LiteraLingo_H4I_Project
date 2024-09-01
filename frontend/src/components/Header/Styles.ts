import styled from "styled-components";

interface Props {
  color: string;
}

const Container = styled.div`
  position: fixed;
  height: 104px;
  z-index: 100;
`;

const SubContainer = styled.div`
  display: flex;
  height: 38px;
  align-items: center;
  position: relative;
  top: 68px;
  left: 36px;
  gap: 15px;
`;

const Text = styled.h1<Props>`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: ${(p) => p.color || "#fff"};
`;

export { Container, SubContainer, Text };
