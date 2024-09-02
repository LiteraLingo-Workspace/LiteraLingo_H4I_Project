import * as S from "./Styles";
import { FaHistory } from "react-icons/fa";
import { useState } from "react";
import { HistoryItem } from "./HistoryItem";

export const History: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <S.Container expanded={!expanded}>
      <S.TabContainer
        onClick={() => setExpanded(!expanded)}
        expanded={!expanded}
      >
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
          <S.TitleContainer expanded={!expanded}>
            <FaHistory size={21} />
            <S.Title>Your History</S.Title>
          </S.TitleContainer>
          {!expanded && (
            <S.Description>
              Swipe up to see your most recent translations!
            </S.Description>
          )}
        </S.TextContainer>
      </S.TabContainer>
      <S.HistoryItemContainer expanded={!expanded}>
        <HistoryItem text="Use soft words and hard argument" type="Metonymy" />
        <HistoryItem text="This winter is as cold as death" type="Simile" />
        <HistoryItem text="Use soft words and hard argument" type="Metonymy" />
        <HistoryItem text="This winter is as cold as death" type="Simile" />
        <HistoryItem text="Use soft words and hard argument" type="Metonymy" />
        <HistoryItem text="This winter is as cold as death" type="Simile" />
        <HistoryItem text="Use soft words and hard argument" type="Metonymy" />
        <HistoryItem text="This winter is as cold as death" type="Simile" />
      </S.HistoryItemContainer>
    </S.Container>
  );
};
