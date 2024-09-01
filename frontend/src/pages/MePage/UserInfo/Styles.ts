import styled from "styled-components";

const Container = styled.div`
  height: 130px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 50px;
  gap: 10px;
`;

const UserIdentityContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Container, UserIdentityContainer };
