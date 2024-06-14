import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component.module.css";

export type ComponentType = {
  className?: string;

  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const Component: FunctionComponent<ComponentType> = ({
  className = "",
  propMarginLeft,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
  propMinWidth2,
}) => {
  const component7Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const jayeshPatilStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const cEOLiranteStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  const testimonialSeparatorStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div
      className={[styles.component7, className].join(" ")}
      style={component7Style}
    >
      <div className={styles.cardColumns}>
        <img
          className={styles.cardContentContainer}
          loading="lazy"
          alt=""
          src="/frame-323@2x.png"
        />
        <div className={styles.testimonialContent}>
          <b className={styles.jayeshPatil} style={jayeshPatilStyle}>
            Jayesh Patil
          </b>
          <div className={styles.ceoLirante} style={cEOLiranteStyle}>
            CEO, Lirante
          </div>
        </div>
      </div>
      <div className={styles.testimonialRating}>
        <div className={styles.starsContainer}>
          <img className={styles.iconstar} alt="" src="/iconstar.svg" />
          <img className={styles.iconstar1} alt="" src="/iconstar.svg" />
          <img className={styles.iconstar2} alt="" src="/iconstar.svg" />
          <img className={styles.iconstar3} alt="" src="/iconstar.svg" />
          <img className={styles.iconstar4} alt="" src="/iconstar.svg" />
        </div>
        <div
          className={styles.testimonialSeparator}
          style={testimonialSeparatorStyle}
        >
          5.0
        </div>
      </div>
      <p className={styles.consecteturAdipiscingElit}>
        consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis
        orci elementum egestas lobortis.Sed lobortis orci elementum egestas
        lobortis.Sed lobortis orci elementum egestas lobortis.
      </p>
      <img
        className={styles.vuesaxboldquoteDownIcon}
        loading="lazy"
        alt=""
        src="/vuesaxboldquotedown.svg"
      />
    </div>
  );
};

export default Component;
