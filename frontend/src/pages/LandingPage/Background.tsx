import { useTranslation } from "react-i18next";

import { StyledDiv, StyledImage, StyledText } from "../../common/components";
import { landingGraphic, landingLogo } from "../../images";

export const Background = () => {
  const { t } = useTranslation();

  return (
    <StyledDiv
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
      height="60%"
      width="450px"
      mb="40px"
    >
      <StyledDiv
        display="flex"
        flexDirection="row"
        width="100%"
        justifyContent="center"
      >
        <StyledImage height="86px" mr="20px" src={landingLogo} />
        <StyledText variant="title">{t("landingPage.title")}</StyledText>
      </StyledDiv>
      <StyledDiv width="60%" mt="40px" pl="40px" pr="100px">
        <StyledText variant="landingSubtitle">
          {t("landingPage.subTitle")}
        </StyledText>
      </StyledDiv>
      <StyledImage height="216px" src={landingGraphic} />
    </StyledDiv>
  );
};
