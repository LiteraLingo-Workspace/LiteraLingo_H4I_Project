import { StyledDiv } from "../../common/components";
import { theme } from "../../common/styles";
import { Background } from "./Background";
import { Modal } from "./Modal";

export const LandingPage = () => (
  <StyledDiv
    position="absolute"
    top={0}
    left={0}
    width="100%"
    height="100%"
    zIndex={0}
    bg={theme.colors.coolAccentBg}
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <Background />
    <Modal />
  </StyledDiv>
);
