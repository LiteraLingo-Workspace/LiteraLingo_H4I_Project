import styled from "styled-components";
import { theme } from "../../common/styles";
import { useState } from "react";
import { scheduleCompletion } from "../../../images/index";
import { IoEllipse } from "react-icons/io5";
import { Graph } from "./Graph";

const Container = styled.div`
  position: absolute;
  height: 723px;
  width: 100%;
  z-index: 1;
  overflow: auto;
  border-radius: 16px 16px 0 0;
`;

const TabContainer = styled.div`
  position: fixed;
  height: 80px;
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
  width: 335px;
  color: white;
  background-color: transparent;
  font-family: "Baloo 2", sans-serif;
  position: relative;
  top: 10px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 32.04px;
  color: ${theme.colors.primary};
`;

const SubTitle = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 10.83px;
  color: ${theme.colors.secondary};
`;

const MainContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 0px 24px 80px 24px;
  gap: 5px;
  min-height: 500px;
  margin-top: 65px;
  border-bottom: 15px solid ${theme.colors.coolAccentBg};
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 15px;
  left: -30px !important;
`;

const StatusTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BottomSheet: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Container style={{ top: `${!expanded ? 355 : 220}px` }}>
      <TabContainer onClick={() => setExpanded(!expanded)}>
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
                stroke={theme.colors.primary}
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
                stroke={theme.colors.primary}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
          <Title>Today's Schedule</Title>
          <SubTitle>(2/3) completed</SubTitle>
        </TextContainer>
      </TabContainer>
      <MainContentsContainer>
        <StatusContainer>
          <img
            style={{ height: "74px", width: "74px" }}
            src={scheduleCompletion}
          />
          <StatusTextContainer>
            <p
              style={{
                fontFamily: "Baloo 2, sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "25.63px",
              }}
            >
              Metaphor Practice
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: `${theme.colors.coolAccentBg}`,
              }}
            >
              <IoEllipse size={8} />
              <p
                style={{
                  fontFamily: "Baloo 2, sans-serif",
                  fontSize: "14px",
                  lineHeight: "22.43px",
                }}
              >
                <span style={{ fontWeight: 500 }}>In progress</span>
                <span
                  style={{
                    color: `${theme.colors.secondary}`,
                    fontWeight: 400,
                  }}
                >
                  , Nov 30, 2023
                </span>
              </p>
            </div>
          </StatusTextContainer>
        </StatusContainer>
        <Graph />
      </MainContentsContainer>
    </Container>
  );
};
