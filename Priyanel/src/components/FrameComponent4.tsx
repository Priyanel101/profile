import { FunctionComponent } from "react";
import Component from "./Component";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.desktop1Inner, className].join(" ")}>
      <div className={styles.instanceParent}>
        <div className={styles.lightYellowAbstractBackgrouParent}>
          <img
            className={styles.lightYellowAbstractBackgrouIcon}
            alt=""
            src="/lightyellowabstractbackground3dillustration3drendering-1-1@2x.png"
          />
          <img
            className={styles.lightYellowAbstractBackgrouIcon1}
            alt=""
            src="/lightyellowabstractbackground3dillustration3drendering-2@2x.png"
          />
          <img
            className={styles.lightYellowAbstractBackgrouIcon2}
            alt=""
            src="/lightyellowabstractbackground3dillustration3drendering-3-1@2x.png"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.testimonialsThatSpeakToMyParent}>
                <h1 className={styles.testimonialsThatSpeakToContainer}>
                  <p className={styles.testimonialsThat}>Testimonials That</p>
                  <p className={styles.speakToMyResults}>
                    <span>{`Speak to `}</span>
                    <span className={styles.myResults}>My Results</span>
                  </p>
                </h1>
                <img
                  className={styles.topQuoteIcon}
                  alt=""
                  src="/vector-1-1.svg"
                />
              </div>
              <div className={styles.bottomQuoteWrapper}>
                <img
                  className={styles.bottomQuoteIcon}
                  alt=""
                  src="/vector-19.svg"
                />
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.loremIpsumDolorSitAmetCoParent}>
                <p className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  congue interdum ligula a dignissim. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Sed lobortis orci elementum
                  egestas lobortis.
                </p>
                <img
                  className={styles.quoteMarkIcon}
                  alt=""
                  src="/vector-20.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonialCardsContainer}>
          <Component />
          <Component
            propMarginLeft="unset"
            propDisplay="inline-block"
            propMinWidth="124px"
            propDisplay1="inline-block"
            propMinWidth1="100px"
            propMinWidth2="37px"
          />
          <Component
            propMarginLeft="unset"
            propDisplay="inline-block"
            propMinWidth="124px"
            propDisplay1="inline-block"
            propMinWidth1="100px"
            propMinWidth2="37px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
