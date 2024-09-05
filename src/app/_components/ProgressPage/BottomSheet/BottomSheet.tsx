"use client";

import styles from "./BottomSheet.module.css";
import { theme } from "../../../../styles/index";
import { useState } from "react";
import { scheduleCompletion } from "../../../assets/index";
import { IoEllipse } from "react-icons/io5";
import { Graph } from "./Graph";
import Image from "next/image";

export const BottomSheet: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div
      className={`${styles.container} ${expanded ? styles.containerExpanded : ''}`}
    >
      <div
        className={styles.tabContainer}
        onClick={() => setExpanded(!expanded)}
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
          <p className={styles.title}>Today&apos;s Schedule</p>
          <p className={styles.subTitle}>(2/3) completed</p>
        </div>
      </div>
      <div className={styles.mainContentsContainer}>
        <div className={styles.statusContainer}>
          <Image
            style={{ height: "74px", width: "74px" }}
            src={scheduleCompletion}
            alt="Schedule Completion"
          />
          <div className={styles.statusTextContainer}>
            <p className={styles.statusTextLabel}>Metaphor Practice</p>
            <div className={styles.statusTextSubContainer}>
              <IoEllipse size={8} />
              <p className={styles.progress}>
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
          </div>
        </div>
        <Graph />
      </div>
    </div>
  );
};
