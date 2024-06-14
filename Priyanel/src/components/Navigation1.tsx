import { FunctionComponent } from "react";
import styles from "./Navigation1.module.css";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: FunctionComponent<Navigation1Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.navigation, className].join(" ")}>
      <div className={styles.instanceParent}>
        <button className={styles.homeWrapper}>
          <a className={styles.home}>Home</a>
        </button>
        <div className={styles.homeContainer}>
          <a className={styles.home1}>About</a>
        </div>
        <div className={styles.homeFrame}>
          <a className={styles.home2}>Service</a>
        </div>
        <div className={styles.iconContainerParent}>
          <div className={styles.iconContainer}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <div className={styles.typo}>
            <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector-2.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector-3.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector-4.svg" />
            <img className={styles.vectorIcon5} alt="" src="/vector-5.svg" />
          </div>
        </div>
        <div className={styles.frameDiv}>
          <a className={styles.home3}>Resume</a>
        </div>
        <div className={styles.homeWrapper1}>
          <a className={styles.home4}>Project</a>
        </div>
        <div className={styles.homeWrapper2}>
          <a className={styles.home5}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navigation1;
