import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.plantCardColumnsWrapper, className].join(" ")}>
      <div className={styles.plantCardColumns}>
        <div className={styles.plantCardContainers}>
          <img
            className={styles.plantCardContainersChild}
            loading="lazy"
            alt=""
            src="/frame-11@2x.png"
          />
        </div>
        <div className={styles.plantCards}>
          <h1 className={styles.calathea}>Lirante</h1>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
