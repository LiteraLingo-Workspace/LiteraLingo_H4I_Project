import styled from "styled-components";
import { theme } from "../../common/styles";
import { useState } from "react";

const Container = styled.div`
  position: absolute;
  height: 723px;
  width: 100%;
  z-index: 1;
  overflow: scroll;
  border-radius: 16px 16px 0 0;
`;

const TabContainer = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  width: 340px;
  color: white;
  background-color: transparent;
  font-family: "Baloo 2", sans-serif;
  position: relative;
  top: 10px;
  color: ${theme.colors.primary};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  min-height: 600px;
  border-bottom: 15px solid ${theme.colors.coolAccentBg};
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid red;
`;

export const BottomSheet: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Container style={{ top: `${!expanded ? 350 : 68}px` }}>
      <TabContainer
        onClick={() => setExpanded(!expanded)}
        style={{ height: `${!expanded ? 136 : 80}px` }}
      >
        <TextContainer>
          {!expanded ? (
            <svg
              width="34"
              height="8"
              viewBox="0 0 34 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: "0 auto" }}
            >
              <path
                d="M33 7L17 2L1 7"
                stroke="#D8E7EC"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="34"
              height="8"
              viewBox="0 0 34 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: "0 auto" }}
            >
              <path
                d="M33 1L17 6L1 1"
                stroke="#D8E7EC"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
          <TitleContainer style={{ marginTop: `${!expanded ? 0 : 15}px` }}>
            <p
              style={{
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "32.04px",
              }}
            >
              Today's Schedule
            </p>
          </TitleContainer>
          {!expanded && (
            <p
              style={{
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "20.83px",
                color: `${theme.colors.secondary}`,
              }}
            >
              (2/3) completed
            </p>
          )}
        </TextContainer>
      </TabContainer>
      <ItemContainer style={{ marginTop: `${!expanded ? 0 : 80}px` }}>
        <StatsContainer>
          <p>aa</p>
          <p>aa</p>
        </StatsContainer>
      </ItemContainer>
    </Container>
  );
};
