import styled from "styled-components";
import { theme } from "../../../styles/index";

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

const Handle = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.secondary};
`;

const Name = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: ${theme.colors.primary};
`;

export { Container, UserIdentityContainer, Handle, Name };
