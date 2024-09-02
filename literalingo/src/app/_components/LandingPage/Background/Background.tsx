import * as S from "./Styles";
import { useTranslation } from "react-i18next";
import { landingGraphic, landingLogo } from "../../../assets/index";
import Image from "next/image";

export const Background: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.FlexRow>
        <Image
          style={{ height: "86px", marginRight: "20px" }}
          src={landingLogo}
          alt="Landing Page LiteraLingo Logo"
        />
        <S.Title>{t("landingPage.title")}</S.Title>
      </S.FlexRow>
      <S.FlexColumn>
        <S.Slogan1>{t("landingPage.subTitle1")}</S.Slogan1>
        <S.Slogan2>{t("landingPage.subTitle2")}</S.Slogan2>
      </S.FlexColumn>
      <Image
        style={{ height: "260px" }}
        src={landingGraphic}
        alt="Landing Page LiteraLingo Graphic"
      />
    </S.Container>
  );
};
