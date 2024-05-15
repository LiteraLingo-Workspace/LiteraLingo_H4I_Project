import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { theme } from "../../common/styles/index";
import { landingGraphic, landingLogo } from "../../../images";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 60%;
  margin-bottom: 10px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const Title = styled.p`
  color: white;
  font-size: 40px;
  line-height: 88px;
  font-weight: 600;
`;

const Slogan1 = styled.p`
  color: ${theme.colors.primary};
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
`;

const Slogan2 = styled(Slogan1)`
  font-weight: 700;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: -75px;
`;

export const Background: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <FlexRow>
        <img
          style={{ height: "86px", marginRight: "20px" }}
          src={landingLogo}
        />
        <Title>{t("landingPage.title")}</Title>
      </FlexRow>
      <FlexColumn>
        <Slogan1>{t("landingPage.subTitle1")}</Slogan1>
        <Slogan2>{t("landingPage.subTitle2")}</Slogan2>
      </FlexColumn>
      <img style={{ height: "260px" }} src={landingGraphic} />
    </Container>
  );
};
