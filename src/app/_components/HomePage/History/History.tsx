"use client";

import { useEffect, useState, useRef } from "react";
import { FaHistory } from "react-icons/fa";
import styles from "./History.module.css";
import { HistoryItem } from "./HistoryItem";
import { api } from "~/trpc/react";

export const History: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const hasFetchedOnExpand = useRef(false); // Track whether data has been fetched on expand

  const { data: historyEntryData, isLoading, error, refetch } =
    api.historyEntry.getAllHistoryEntries.useQuery();

    useEffect(() => {
      // Refetch only once when expanded for the first time
      if (expanded && !hasFetchedOnExpand.current) {
        void refetch(); // Fetch the data
        hasFetchedOnExpand.current = true; // Mark as fetched
      } else if (!expanded) {
        // Reset the fetch flag when collapsed
        hasFetchedOnExpand.current = false;
      }
    }, [expanded, refetch]);

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
      {/* Toggle expand/collapse */}
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

      {/* Display history entries */}
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
