import { FunctionComponent } from "react";
import styles from "./Services.module.css";

export type ServicesType = {
  className?: string;
};

const Services: FunctionComponent<ServicesType> = ({ className = "" }) => {
  return (
    <section className={[styles.services, className].join(" ")}>
      <div className={styles.instanceParent}>
        <div className={styles.lightYellowAbstractBackgrouParent}>
          <img
            className={styles.lightYellowAbstractBackgrouIcon}
            alt=""
            src="/lightyellowabstractbackground3dillustration3drendering-1@2x.png"
          />
          <img
            className={styles.lightYellowAbstractBackgrouIcon1}
            loading="lazy"
            alt=""
            src="/lightyellowabstractbackground3dillustration3drendering-2@2x.png"
          />
          <img
            className={styles.lightYellowAbstractBackgrouIcon2}
            alt=""
            src="/lightyellowabstractbackground3dillustration3drendering-3@2x.png"
          />
        </div>
        <div className={styles.description}>
          <div className={styles.servicesTitleParent}>
            <div className={styles.servicesTitle}>
              <h1 className={styles.myServices}>
                <span>{`My `}</span>
                <span className={styles.services1}>Services</span>
              </h1>
            </div>
            <p
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales `}</p>
          </div>
        </div>
        <div className={styles.instanceGroup}>
          <div className={styles.frameParent}>
            <img className={styles.instanceChild} alt="" src="/frame-60.svg" />
            <div className={styles.iconOutlinedDirectionsWrapper}>
              <img
                className={styles.iconOutlinedDirections}
                alt=""
                src="/icon--outlined--directions--straight-arrows--up-right-3.svg"
              />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <img className={styles.instanceItem} alt="" src="/frame-60-1.svg" />
            <div className={styles.iconOutlinedDirectionsContainer}>
              <img
                className={styles.iconOutlinedDirections1}
                alt=""
                src="/icon--outlined--directions--straight-arrows--up-right-3.svg"
              />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <img
              className={styles.instanceInner}
              alt=""
              src="/frame-60-2.svg"
            />
            <div className={styles.iconOutlinedDirectionsFrame}>
              <img
                className={styles.iconOutlinedDirections2}
                alt=""
                src="/icon--outlined--directions--straight-arrows--up-right-3.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.dotsWrapper}>
          <div className={styles.dots}>
            <div className={styles.dotsChild} />
            <div className={styles.dotsItem} />
            <div className={styles.dotsInner} />
            <div className={styles.rectangleDiv} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
