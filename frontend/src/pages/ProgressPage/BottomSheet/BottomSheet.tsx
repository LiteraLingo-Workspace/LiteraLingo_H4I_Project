import * as S from "./Styles";
import { theme } from "../../../styles/index";
import { useState } from "react";
import { scheduleCompletion } from "../../../assets/index";
import { IoEllipse } from "react-icons/io5";
import { Graph } from "./Graph";

export const BottomSheet: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <S.Container style={{ top: `${!expanded ? 355 : 220}px` }}>
      <S.TabContainer onClick={() => setExpanded(!expanded)}>
        <S.TextContainer>
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
          <S.Title>Today's Schedule</S.Title>
          <S.SubTitle>(2/3) completed</S.SubTitle>
        </S.TextContainer>
      </S.TabContainer>
      <S.MainContentsContainer>
        <S.StatusContainer>
          <img
            style={{ height: "74px", width: "74px" }}
            src={scheduleCompletion}
          />
          <S.StatusTextContainer>
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
          </S.StatusTextContainer>
        </S.StatusContainer>
        <Graph />
      </S.MainContentsContainer>
    </S.Container>
  );
};
