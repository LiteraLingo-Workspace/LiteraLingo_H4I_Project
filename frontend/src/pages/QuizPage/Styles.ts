import styled from "styled-components";

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

const SubContainer = styled.div`
  position: absolute;
  top: 104px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Container, SubContainer };
