"use client";

import styles from "./History.module.css";
import { FaHistory } from "react-icons/fa";
import { useState } from "react";
import { HistoryItem } from "./HistoryItem";
import { api } from "~/trpc/react";

export const History: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const {
    data: historyEntryData,
    isLoading,
    error,
  } = api.historyEntry.getAllHistoryEntries.useQuery({
    byMostRecent: true,
  });
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading history entries</div>;
  }
  
  return (
    <div
      className={`${styles.container} ${expanded ? styles.containerExpanded : ""}`}
    >
      <div
        className={styles.tabContainer}
        onClick={() => setExpanded(!expanded)}
        style={{ height: `${!expanded ? 136 : 80}px` }}
      >
        <div className={styles.textContainer}>
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
          <div
            className={styles.titleContainer}
            style={{ marginTop: `${!expanded ? 0 : 15}px` }}
          >
            <FaHistory size={21} />
            <p className={styles.title}>Your History</p>
          </div>
          {!expanded && (
            <p className={styles.description}>
              Swipe up to see your most recent translations!
            </p>
          )}
        </div>
      </div>
      <div
        className={styles.historyItemContainer}
        style={{ marginTop: `${!expanded ? 0 : 80}px` }}
      >
        {historyEntryData?.map((entry) => (
          <HistoryItem
            key={entry.id}
            text={entry.textEntered}
            type={entry.outputText}
            isFavorite={entry.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};