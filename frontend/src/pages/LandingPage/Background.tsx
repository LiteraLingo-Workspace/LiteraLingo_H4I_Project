import { useTranslation } from "react-i18next";

import {
  StyledDiv,
  StyledImage,
  StyledText,
} from "../../common/components/index";
import { landingGraphic, landingLogo } from "../../../images";
import { theme } from "../../common/styles";

export const Background = () => {
  const { t } = useTranslation();

  return (
    <StyledDiv
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
      height="60%"
      mb="10px"
    >
      <StyledDiv
        display="flex"
        flexDirection="row"
        width="100%"
        justifyContent="center"
      >
        <StyledImage height="86px" mr="20px" src={landingLogo} />
        <StyledText
          color="white"
          fontSize="40px"
          lineHeight="88px"
          fontWeight="600"
        >
          {t("landingPage.title")}
        </StyledText>
      </StyledDiv>
      <StyledDiv
        width="100%"
        mt="10px"
        mb="-75px"
        display="flex"
        flexDirection="column"
      >
        <StyledText
          color={theme.colors.primary}
          fontSize="32px"
          lineHeight="40px"
          fontWeight="500"
        >
          {t("landingPage.subTitle1")}
        </StyledText>
        <StyledText
          color={theme.colors.primary}
          fontSize="32px"
          lineHeight="40px"
          fontWeight="700"
        >
          {t("landingPage.subTitle2")}
        </StyledText>
      </StyledDiv>
      <StyledImage height="260px" src={landingGraphic} />
    </StyledDiv>
  );
};
