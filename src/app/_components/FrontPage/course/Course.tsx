import React from "react";
import styles from "./Choice.module.css";

interface CourseProps {
  title: string;
  progress: number;
  totalProgress: number;
  urlToCourse: string;
}

export const Course: React.FC<CourseProps> = ({
  title,
  progress,
  totalProgress,
  urlToCourse,
}) => {
  const progressPercentage = (progress / totalProgress) * 100;
  const isCompleted = progress === totalProgress;

  return (
    <div className={styles.courseCard}>
      <div className={styles.courseHeader}>
        <h3 className={styles.courseTitle}>{title}</h3>
        <span className={styles.courseProgress}>
          {progress}/{totalProgress}
        </span>
      </div>

      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <a href={urlToCourse} className={isCompleted ? styles.reviewBtn : styles.startBtn}>
        {isCompleted ? "Review" : progress > 0 ? "Continue" : "Start Quiz"}
      </a>
    </div>
  );
};

