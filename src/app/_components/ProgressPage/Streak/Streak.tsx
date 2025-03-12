"use client"

import styles from "./Streak.module.css";
import { DateElement } from "./Date";
import useCurrentUser from "~/app/LoadUser";


const getMonth = (month: number) => {

  switch (month) {
    case 0: return "Jan";
    case 1: return "Feb";
    case 2: return "Mar";
    case 3: return "Apr";
    case 4: return "May";
    case 5: return "Jun";
    case 6: return "Jul";
    case 7: return "Aug";
    case 8: return "Sept";
    case 9: return "Oct";
    case 10: return "Nov";
    case 11: return "Dec";
    default: return "";
  }

}

const isLeapYear = (year: number) => ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

const getDayCount = (month: string, isLeapYear: boolean) => {

  if (month == "Feb") return isLeapYear ? 29 : 28;
  else if (month == "Jan" || month == "Mar" || month == "May" || month == "Jul" || month == "Aug" || month == "Oct" || month == "Dec") return 31;
  else return 30;

}

export const Streak: React.FC = () => {

  const user = useCurrentUser();

  const streakDays = user?.data?.streakDays ?? 0;

  // get the current date
  const date = new Date(Date.now());
  const month = getMonth(date.getMonth());

  const dateInt = date.getDate();
  const leapYear = isLeapYear(date.getFullYear());

  // how many days are in this month
  const maxDays = getDayCount(month, leapYear);

  const days: number[] = new Array<number>(5);
  days[0] = dateInt - 2;
  days[1] = dateInt - 1;
  days[2] = dateInt;
  days[3] = dateInt + 1;
  days[4] = dateInt + 2;

  // create an array of length 5 with default month of the current month
  const months: string[] = new Array<string>(5);
  months[0] = month;
  months[1] = month;
  months[2] = month;
  months[3] = month;
  months[4] = month;

  if (days[0] < 1) {
    months[0] = getMonth(month == "Jan" ? 11 : date.getMonth() - 1);
    days[0] += getDayCount(months[0], leapYear);
  }
  if (days[1] < 1) {
    months[1] = getMonth(month == "Jan" ? 11 : date.getMonth() - 1);
    days[1] += getDayCount(months[1], leapYear);
  }
  if (days[3] > maxDays) {
    months[3] = getMonth(month == "Dec" ? 0 : date.getMonth() + 1);
    days[3] -= maxDays;
  }
  if (days[4] > maxDays) {
    months[4] = getMonth(month == "Dec" ? 0 : date.getMonth() + 1);
    days[4] -= maxDays;
  }

  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
      <p className={styles.streakLabel}>{user?.data?.streakDays} Day Streak!</p>
      <div className={styles.subContainer}>
        <DateElement month={months[0]} day={days[0]} streakActive={streakDays > 2} today={false} />
        <DateElement month={months[1]} day={days[1]} streakActive={streakDays > 1} today={false} />
        <DateElement month={months[2]} day={days[2]} streakActive={streakDays > 0} today={true} />
        <DateElement month={months[3]} day={days[3]} streakActive={false} today={false} />
        <DateElement month={months[4]} day={days[4]} streakActive={false} today={false} />
      </div>
    </div>
  );
};
