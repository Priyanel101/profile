import { FunctionComponent } from "react";
import styles from "./FrameComponent8.module.css";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.desktop1Inner, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.instanceParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/frame-75.svg"
          />
          <div className={styles.frameParent}>
            <div className={styles.whyHireMeWrapper}>
              <h1 className={styles.whyHireMeContainer}>
                <span>{`Why `}</span>
                <span className={styles.hireMe}>Hire me</span>
                <span>?</span>
              </h1>
            </div>
            <p
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales `}</p>
            <div className={styles.hireMeProjectsContainer}>
              <div className={styles.projectCountContainer}>
                <div className={styles.projectCounter}>450+</div>
                <div className={styles.projectCompleted}>Project Completed</div>
              </div>
              <div className={styles.projectCountContainer1}>
                <div className={styles.div}>450+</div>
                <div className={styles.projectCompleted1}>
                  Project Completed
                </div>
              </div>
            </div>
            <button className={styles.shopTropicalPlantsWrapper}>
              <b className={styles.shopTropicalPlants}>Hire me</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
