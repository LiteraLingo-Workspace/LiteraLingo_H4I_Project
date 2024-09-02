import * as S from "./Styles";
import { useTranslation } from "react-i18next";
import { landingGraphic, landingLogo } from "../../../assets/index";

export const Background: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.FlexRow>
        <img
          style={{ height: "86px", marginRight: "20px" }}
          src={landingLogo}
        />
        <S.Title>{t("landingPage.title")}</S.Title>
      </S.FlexRow>
      <S.FlexColumn>
        <S.Slogan1>{t("landingPage.subTitle1")}</S.Slogan1>
        <S.Slogan2>{t("landingPage.subTitle2")}</S.Slogan2>
      </S.FlexColumn>
      <img style={{ height: "260px" }} src={landingGraphic} />
    </S.Container>
  );
};
