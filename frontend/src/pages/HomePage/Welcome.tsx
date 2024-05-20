import styled from "styled-components";
import { avatar } from "../../../images";
import { theme } from "../../common/styles";

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
`;

const NameContainer = styled.div`
  color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  width: 98px;
  height: 74px;
  text-align: right;
`;

export const Welcome: React.FC = () => {
  return (
    <Container>
      <img
        style={{ height: "80px", width: "75.35px", borderRadius: "100px" }}
        src={avatar}
      />
      <NameContainer>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          Welcome
        </p>
        <p
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: "500",
            fontSize: "32px",
            marginTop: "-10px",
          }}
        >
          Anna
        </p>
      </NameContainer>
    </Container>
  );
};
