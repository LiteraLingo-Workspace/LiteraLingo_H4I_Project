import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  height: 96px;
  width: 350px;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  padding: 4px 8px 4px 8px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid red;
`;

export const Navbar: React.FC = () => {
  return (
    <Container>
      <p>acjnjs</p>
    </Container>
  );
};
