import styled from "styled-components";
import { FaRegStar, FaRegUser } from "react-icons/fa";
import { MdOutlineQuestionMark } from "react-icons/md";
import { theme } from "../styles";

const Container = styled.div`
  position: fixed;
  bottom: 23px;
  height: 72px;
  width: 330px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  padding: 4px 8px 4px 8px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid red;
`;

const LinkContainer = styled.div`
  height: 83px;
  width: 56px;
  display: flex;
  justify-content: center;
  color: ${theme.colors.primary};
  cursor: pointer;
`;

const Text = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  line-height: 22px;
  font-weight: 500;
  position: absolute;
  top: 51px;
`;

export const Navbar: React.FC = () => {
  return (
    <Container>
      <LinkContainer>
        <svg
          width="34"
          height="33"
          viewBox="0 0 34 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", top: "13px" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.1698 0.5H3.1698V30.5H33.1698V32.5H1.1698V0.5ZM21.1698 7.5C21.1698 7.23478 21.2752 6.98043 21.4627 6.79289C21.6502 6.60536 21.9046 6.5 22.1698 6.5H30.1698C30.435 6.5 30.6894 6.60536 30.8769 6.79289C31.0644 6.98043 31.1698 7.23478 31.1698 7.5V15.5C31.1698 15.7652 31.0644 16.0196 30.8769 16.2071C30.6894 16.3946 30.435 16.5 30.1698 16.5C29.9046 16.5 29.6502 16.3946 29.4627 16.2071C29.2752 16.0196 29.1698 15.7652 29.1698 15.5V10.3L21.9438 19.134C21.8553 19.242 21.7453 19.3302 21.6206 19.3931C21.496 19.456 21.3596 19.492 21.2202 19.499C21.0808 19.506 20.9415 19.4837 20.8112 19.4336C20.6809 19.3834 20.5626 19.3066 20.4638 19.208L15.2898 14.034L7.9778 24.088C7.81784 24.2914 7.58528 24.4249 7.32897 24.4604C7.07266 24.4959 6.81256 24.4307 6.60334 24.2784C6.39412 24.1261 6.25206 23.8987 6.20702 23.6439C6.16198 23.3891 6.21746 23.1268 6.3618 22.912L14.3618 11.912C14.4467 11.795 14.556 11.6979 14.6821 11.6272C14.8081 11.5565 14.948 11.514 15.0921 11.5026C15.2362 11.4912 15.3811 11.5111 15.5167 11.5611C15.6524 11.6111 15.7755 11.6898 15.8778 11.792L21.0958 17.012L28.0598 8.5H22.1698C21.9046 8.5 21.6502 8.39464 21.4627 8.20711C21.2752 8.01957 21.1698 7.76522 21.1698 7.5Z"
            fill="#163968"
            stroke="#163968"
            strokeWidth="0.8"
          />
        </svg>

        <Text>Progress</Text>
      </LinkContainer>
      <LinkContainer>
        <MdOutlineQuestionMark
          size={32}
          style={{ position: "absolute", top: "13px" }}
        />
        <Text>Quiz</Text>
      </LinkContainer>
      <LinkContainer>
        <svg
          width="62"
          height="63"
          viewBox="0 0 62 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.839355"
            y="0.5"
            width="61"
            height="62"
            rx="30.5"
            fill="#F37576"
          />
          <path
            d="M29.5269 22.125L30.4331 20.25L32.2456 19.3125L30.4331 18.375L29.5269 16.5L28.6206 18.375L26.8081 19.3125L28.6206 20.25L29.5269 22.125ZM21.3706 25.875L22.8806 22.7502L25.9019 21.1875L22.8806 19.6248L21.3706 16.5L19.8606 19.6248L16.8394 21.1875L19.8606 22.7502L21.3706 25.875ZM41.3081 33.375L39.7981 36.4998L36.7769 38.0625L39.7981 39.6252L41.3081 42.75L42.8181 39.6252L45.8394 38.0625L42.8181 36.4998L41.3081 33.375ZM45.3081 22.0213L40.5021 17.0496C40.1487 16.6828 39.6848 16.5 39.2209 16.5C38.757 16.5 38.2931 16.6828 37.9391 17.0496L17.3706 38.3273C16.6626 39.0598 16.6626 40.2469 17.3706 40.9787L22.1766 45.9504C22.5306 46.3166 22.9945 46.4994 23.4578 46.4994C23.9217 46.4994 24.3856 46.3166 24.7396 45.9504L45.3081 24.6721C46.0161 23.9408 46.0161 22.7531 45.3081 22.0213ZM37.1988 28.4215L34.3153 25.4385L39.2203 20.3643L42.1039 23.3473L37.1988 28.4215Z"
            fill="white"
          />
        </svg>

        <Text>Home</Text>
      </LinkContainer>
      <LinkContainer>
        <FaRegStar size={32} style={{ position: "absolute", top: "13px" }} />
        <Text>Saved</Text>
      </LinkContainer>
      <LinkContainer>
        <FaRegUser size={32} style={{ position: "absolute", top: "13px" }} />
        <Text>Me</Text>
      </LinkContainer>
    </Container>
  );
};
