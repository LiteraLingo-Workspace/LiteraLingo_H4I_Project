"use client";

import styles from "./Modal.module.css";
import React from "react";
import { Item } from "./Item";
import { api } from "~/trpc/react";

export const Modal: React.FC = () => {
  const {
    data: historyEntryData,
    isLoading,
    error,
  } = api.historyEntry.getAllHistoryEntries.useQuery({
    isFavorite: true,
    byMostRecent: true,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const items = historyEntryData ?? [];

  return (
    <div className={styles.savedPage}>
      <div className={styles.savedItems}>
        {items.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            textEntered={item.textEntered}
            outputText={item.outputText}
          />
        ))}
      </div>
    </div>
  );
};

export default Modal;
