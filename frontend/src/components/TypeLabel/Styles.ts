import styled from "styled-components";

interface Props {
  color: string;
  bg: string;
}

const TypeLabel = styled.div<Props>`
  color: ${(p) => p.color};
  background-color: ${(p) => p.bg};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  display: inline-block;
  border: none;
  border-radius: 30px;
  text-align: center;
  vertical-align: middle;
  padding: 8px 16px;
  line-height: 22px;
`;

export { TypeLabel };
