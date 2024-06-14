import { FunctionComponent } from "react";
import styles from "./AboutMePage.module.css";

export type AboutMePageType = {
  className?: string;
};

const AboutMePage: FunctionComponent<AboutMePageType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.aboutMePage, className].join(" ")}>
      <div className={styles.gradient} />
      <div className={styles.aboutMePageChild} />
      <div className={styles.aboutMePageItem} />
      <div className={styles.aboutMePageInner} />
      <b className={styles.aboutMe}>
        <span>About</span>
        <span className={styles.span}>{` `}</span>
        <span className={styles.me}>me</span>
      </b>
      <b className={styles.iAmHighly}>
        I am highly motivated to learn and gain practical experience,
        particularly in the dynamic field of cloud technology. My enthusiasm
        drives me to explore every facet of technology, contributing to a
        valuable and innovative work environment.
      </b>
      <img className={styles.doodleItemsIcon} alt="" src="/doodle-items.svg" />
      <img className={styles.lightbulbIcon} alt="" src="/lightbulb@2x.png" />
      <img className={styles.groupIcon} alt="" src="/group-62@2x.png" />
    </div>
  );
};

export default AboutMePage;
