import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent12.module.css";

export type FrameComponent12Type = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlexWrap?: CSSProperties["flexWrap"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent12: FunctionComponent<FrameComponent12Type> = ({
  className = "",
  propAlignSelf,
  propFlexWrap,
  propFlex,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flexWrap: propFlexWrap,
    };
  }, [propAlignSelf, propFlexWrap]);

  const frameButtonStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <button className={styles.portfolioItemsParent} style={frameButtonStyle}>
        <div className={styles.portfolioItems}>
          <a className={styles.portfolio}>Portfolio</a>
        </div>
        <img
          className={styles.iconOutlinedDirections}
          alt=""
          src="/icon--outlined--directions--straight-arrows--up-right.svg"
        />
      </button>
      <div className={styles.linkItemsWrapper}>
        <div className={styles.linkItems}>
          <div className={styles.hireMe}>Hire me</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent12;
