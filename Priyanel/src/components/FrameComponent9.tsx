import { FunctionComponent } from "react";
import styles from "./FrameComponent9.module.css";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.desktop1Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.myWorkExperinceWrapper}>
          <h1 className={styles.myWorkExperinceContainer}>
            <span>{`My `}</span>
            <span className={styles.workExperince}>Work Experince</span>
          </h1>
        </div>
        <div className={styles.iconLibraryParent}>
          <div className={styles.iconLibrary}>
            <div className={styles.cognizantMumbaiParent}>
              <b className={styles.cognizantMumbai}>Cognizant, Mumbai</b>
              <div className={styles.sep2016July}>Sep 2016- July 2020</div>
            </div>
            <div className={styles.sugeePvtLimitedMumbaiParent}>
              <h1 className={styles.sugeePvtLimited}>
                Sugee Pvt limited, Mumbai
              </h1>
              <div className={styles.sep2020July}>Sep 2020- July 2023</div>
            </div>
            <div className={styles.cinetstoxMumbaiParent}>
              <b className={styles.cinetstoxMumbai}>Cinetstox, Mumbai</b>
              <div className={styles.sep2023}>Sep 2023</div>
            </div>
          </div>
          <div className={styles.experienceDotsContainerWrapper}>
            <div className={styles.experienceDotsContainer}>
              <div className={styles.lineParent}>
                <div className={styles.frameChild} />
                <div className={styles.ellipseWrapper}>
                  <div className={styles.frameItem} />
                </div>
              </div>
              <div className={styles.experienceDotsContainerInner}>
                <div className={styles.frameInner} />
              </div>
              <div className={styles.experienceDotsContainerChild}>
                <div className={styles.ellipseDiv} />
              </div>
            </div>
          </div>
          <div className={styles.experienceDescriptionsContai}>
            <div className={styles.experienceDescriptions}>
              <b className={styles.experinceDesigner}>Experince Designer</b>
              <p
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales `}</p>
            </div>
            <div className={styles.experienceDescriptions1}>
              <b className={styles.uiuxDesigner}>UI/UX Designer</b>
              <p
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales `}</p>
            </div>
            <h1 className={styles.leadUxDesigner}>Lead UX Designer</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
