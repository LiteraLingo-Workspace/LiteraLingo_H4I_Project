import React from "react";
import styles from "./Choice.module.css";

interface CourseProps {
  title: string;
  progress: number;
  totalProgress: number;
  urlToCourse: string;
  bgColour: string;
  borderColour: string;
}

export const Course: React.FC<CourseProps> = ({
  title,
  progress,
  totalProgress,
  urlToCourse,
  bgColour,
  borderColour,

}) => {
  const progressPercentage = (progress / totalProgress) * 100;
  const isCompleted = progress === totalProgress;

  return (
    <div 
    className={styles.courseCard}
    style={
      {
        border: `2px solid ${borderColour}`, 
        backgroundColor: bgColour, 
        boxShadow: `0px 4px 0px ${borderColour}`
        }}>
      <div>
          <h3 className={styles.courseTitle}>{title}</h3>



        <div className={styles.courseTitle} style={{fontSize: '14px'}}>Progress</div>

        <div className={styles.progressWrapper}>

          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <span className={styles.courseProgress}>
          &nbsp; &nbsp; {progress}/{totalProgress}
          </span>




        </div>

      </div>

      <a href={urlToCourse} className={isCompleted ? styles.reviewBtn : styles.startBtn}>
        {isCompleted ? "Review" : progress > 0 ? "Continue" : "Start"}
      </a>
    </div>
  );
};

