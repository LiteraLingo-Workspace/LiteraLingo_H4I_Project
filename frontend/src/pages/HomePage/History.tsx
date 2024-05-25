import styled from "styled-components";
import { theme } from "../../common/styles";
import { FaHistory } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

const Container = styled.div`
  position: absolute;
  height: 723px;
  width: 100%;
  z-index: 1;
  overflow: scroll;
`;

const TabContainer = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${theme.colors.coolAccentBg};
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  width: 344px;
  color: white;
  background-color: transparent;
  font-family: "Baloo 2", sans-serif;
  position: relative;
  top: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const HistoryItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 24px 24px 80px 24px;
  gap: 16px;
  border-bottom: 15px solid ${theme.colors.coolAccentBg};
`;

const HistoryItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.faintBlue};
  height: 86px;
  width: 344px;
  border-radius: 12px;
`;

const HistoryItemTop = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  height: 32px;
  width: 325px;
  justify-content: space-between;
  padding: 8px;
  align-items: center;
  color: ${theme.colors.secondary};
`;

const HistoryItemButtons = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  align-items: center;
  gap: 4px;
`;

const HistoryItemBottom = styled.div`
  background-color: transparent;
  height: 30px;
  width: 311px;
  padding: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  color: ${theme.colors.primary};
  font-family: "Poppins", sans-serif;
`;

const HistoryItemBottomText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-geight: 30px;
`;

export const History: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Container style={{ top: `${!expanded ? 656 : 68}px` }}>
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
            <FaHistory size={21} />
            <p
              style={{
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "32.04px",
              }}
            >
              Your History
            </p>
          </TitleContainer>
          {!expanded && (
            <p
              style={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "16px",
                color: `${theme.colors.veryLight}`,
              }}
            >
              Swipe up to see your most recent translations!
            </p>
          )}
        </TextContainer>
      </TabContainer>
      <HistoryItemContainer style={{ marginTop: `${!expanded ? 0 : 80}px` }}>
        <HistoryItem>
          <HistoryItemTop>
            <p
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Metonymy
            </p>
            <HistoryItemButtons>
              <CiStar size={24} />
              <BsThreeDotsVertical size={18} />
            </HistoryItemButtons>
          </HistoryItemTop>
          <HistoryItemBottom>
            <HistoryItemBottomText>
              Use soft words and hard argumentsre
            </HistoryItemBottomText>
          </HistoryItemBottom>
        </HistoryItem>
        <HistoryItem>
          <HistoryItemTop>
            <p
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Metonymy
            </p>
            <HistoryItemButtons>
              <CiStar size={24} />
              <BsThreeDotsVertical size={18} />
            </HistoryItemButtons>
          </HistoryItemTop>
          <HistoryItemBottom>
            <HistoryItemBottomText>
              Use soft words and hard argumentsre
            </HistoryItemBottomText>
          </HistoryItemBottom>
        </HistoryItem>
        <HistoryItem>
          <HistoryItemTop>
            <p
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Metonymy
            </p>
            <HistoryItemButtons>
              <CiStar size={24} />
              <BsThreeDotsVertical size={18} />
            </HistoryItemButtons>
          </HistoryItemTop>
          <HistoryItemBottom>
            <HistoryItemBottomText>
              Use soft words and hard argumentsre
            </HistoryItemBottomText>
          </HistoryItemBottom>
        </HistoryItem>
        <HistoryItem>
          <HistoryItemTop>
            <p
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Metonymy
            </p>
            <HistoryItemButtons>
              <CiStar size={24} />
              <BsThreeDotsVertical size={18} />
            </HistoryItemButtons>
          </HistoryItemTop>
          <HistoryItemBottom>
            <HistoryItemBottomText>
              Use soft words and hard argumentsre
            </HistoryItemBottomText>
          </HistoryItemBottom>
        </HistoryItem>
        <HistoryItem>
          <HistoryItemTop>
            <p
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Simile
            </p>
            <HistoryItemButtons>
              <CiStar size={24} />
              <BsThreeDotsVertical size={18} />
            </HistoryItemButtons>
          </HistoryItemTop>
          <HistoryItemBottom>
            <HistoryItemBottomText>
              This winter is as cold as death
            </HistoryItemBottomText>
          </HistoryItemBottom>
        </HistoryItem>
        <HistoryItem>
          <HistoryItemTop>
            <p
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Metonymy
            </p>
            <HistoryItemButtons>
              <CiStar size={24} />
              <BsThreeDotsVertical size={18} />
            </HistoryItemButtons>
          </HistoryItemTop>
          <HistoryItemBottom>
            <HistoryItemBottomText>
              Use soft words and hard argumentsre
            </HistoryItemBottomText>
          </HistoryItemBottom>
        </HistoryItem>
        <HistoryItem>
          <HistoryItemTop>
            <p
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Metonymy
            </p>
            <HistoryItemButtons>
              <CiStar size={24} />
              <BsThreeDotsVertical size={18} />
            </HistoryItemButtons>
          </HistoryItemTop>
          <HistoryItemBottom>
            <HistoryItemBottomText>
              Use soft words and hard argumentsre
            </HistoryItemBottomText>
          </HistoryItemBottom>
        </HistoryItem>
        <HistoryItem>
          <HistoryItemTop>
            <p
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Metonymy
            </p>
            <HistoryItemButtons>
              <CiStar size={24} />
              <BsThreeDotsVertical size={18} />
            </HistoryItemButtons>
          </HistoryItemTop>
          <HistoryItemBottom>
            <HistoryItemBottomText>
              Use soft words and hard argumentsre
            </HistoryItemBottomText>
          </HistoryItemBottom>
        </HistoryItem>
      </HistoryItemContainer>
    </Container>
  );
};
