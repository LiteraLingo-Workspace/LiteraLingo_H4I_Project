import styled from "styled-components";
import { theme } from "../../common/styles";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.warmYellow};
  font-weight: 700;
  font-size: 24px;
  line-height: 32.74px;
  gap: 3px;
`;

export const StarInfo: React.FC = () => {
  return (
    <Container>
      <svg
        width="35"
        height="31"
        viewBox="0 0 35 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6634 1.27737C17.0582 0.674534 17.9418 0.674533 18.3366 1.27737L23.3638 8.95366C23.5084 9.17434 23.7342 9.32897 23.9922 9.38388L33.3532 11.3761C34.1164 11.5385 34.4078 12.4736 33.872 13.0409L27.6642 19.6124C27.4664 19.8218 27.3685 20.1063 27.3956 20.3931L28.2216 29.1392C28.2916 29.8801 27.5567 30.4351 26.8632 30.1651L17.8628 26.6612C17.6295 26.5704 17.3705 26.5704 17.1372 26.6612L8.13676 30.1651C7.44331 30.4351 6.70844 29.8801 6.77841 29.1392L7.60444 20.3931C7.63152 20.1063 7.53362 19.8218 7.3358 19.6124L1.12803 13.0409C0.592162 12.4736 0.88355 11.5386 1.64681 11.3761L11.0078 9.38388C11.2658 9.32897 11.4916 9.17434 11.6362 8.95366L16.6634 1.27737Z"
          fill="#EACB6B"
        />
      </svg>
      <p style={{ marginTop: "5px", fontFamily: "Arial, sans-serif" }}>4</p>
    </Container>
  );
};
