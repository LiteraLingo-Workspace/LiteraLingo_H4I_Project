import styled from "styled-components";
import { avatar } from "../../../images/index";
import { theme } from "../../common/styles";

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

export const UserInfo: React.FC = () => {
  return (
    <Container>
      <img
        style={{ height: "112px", width: "105.49px", borderRadius: "100px" }}
        src={avatar}
      />
      <UserIdentityContainer>
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: `${theme.colors.secondary}`,
          }}
        >
          @Raven1234
        </p>
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "30px",
            color: `${theme.colors.primary}`,
          }}
        >
          Anna Collin
        </p>
      </UserIdentityContainer>
    </Container>
  );
};
