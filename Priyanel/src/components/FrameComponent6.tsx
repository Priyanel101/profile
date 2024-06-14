import { FunctionComponent } from "react";
import FrameComponent7 from "./FrameComponent7";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.plantCardsContainerParent}>
        <div className={styles.plantCardsContainer}>
          <FrameComponent7 />
          <FrameComponent7 />
        </div>
        <div className={styles.uiIconarrowDownlightWrapper}>
          <img
            className={styles.uiIconarrowDownlight}
            alt=""
            src="/ui-iconarrow-downlight.svg"
          />
        </div>
        <img className={styles.frameChild} alt="" src="/frame-57@2x.png" />
      </div>
    </div>
  );
};

export default FrameComponent6;
