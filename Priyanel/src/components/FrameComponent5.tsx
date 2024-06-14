import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.uIDesignComponentsWrapper, className].join(" ")}>
      <div className={styles.uIDesignComponents}>
        <button className={styles.component6}>
          <div className={styles.uiuxDesign}>Landing Page</div>
        </button>
        <div className={styles.component5}>
          <div className={styles.uiuxDesign1}>Product Design</div>
        </div>
        <button className={styles.component2}>
          <div className={styles.uiuxDesign2}>Animation</div>
        </button>
        <div className={styles.component3}>
          <div className={styles.uiuxDesign3}>Glassmorphism</div>
        </div>
        <button className={styles.component4}>
          <div className={styles.uiuxDesign4}>Cards</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent5;
