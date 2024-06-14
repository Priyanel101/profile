import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
  frame60?: string;
  nov2023?: string;
  designUnraveledBehindTheS?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  frame60,
  nov2023,
  designUnraveledBehindTheS,
}) => {
  return (
    <div className={[styles.instanceParent, className].join(" ")}>
      <div className={styles.frameParent}>
        <img className={styles.instanceChild} alt="" src={frame60} />
        <div className={styles.iconOutlinedDirectionsWrapper}>
          <img
            className={styles.iconOutlinedDirections}
            alt=""
            src="/icon--outlined--directions--straight-arrows--up-right-3.svg"
          />
        </div>
      </div>
      <button className={styles.component6}>
        <div className={styles.uiuxDesign}>App Design</div>
      </button>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.ellipseWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.jayeshPatil}>Jayesh Patil</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.ellipseContainer}>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.nov2023}>{nov2023}</div>
        </div>
      </div>
      <h2 className={styles.designUnraveledBehindThe}>
        {designUnraveledBehindTheS}
      </h2>
    </div>
  );
};

export default FrameComponent2;
