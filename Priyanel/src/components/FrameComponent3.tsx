import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.projectIdeaContentWrapper, className].join(" ")}
    >
      <div className={styles.projectIdeaContent}>
        <div className={styles.projectIdeaHeading}>
          <h1 className={styles.haveAnAwsomeContainer}>
            <span>{`Have an Awsome Project Idea? `}</span>
            <span className={styles.letsDiscuss}>Let’s Discuss</span>
          </h1>
        </div>
        <div className={styles.emailInputParent}>
          <div className={styles.emailInput}>
            <div className={styles.emailAddress}>
              <div className={styles.vuesaxboldsmsWrapper}>
                <img
                  className={styles.vuesaxboldsmsIcon}
                  alt=""
                  src="/vuesaxboldsms.svg"
                />
              </div>
              <div className={styles.emailField}>
                <div className={styles.enterEmailAddress}>
                  Enter Email Address
                </div>
              </div>
            </div>
          </div>
          <button className={styles.homeWrapper}>
            <div className={styles.home}>Send</div>
          </button>
        </div>
        <div className={styles.ratingIconsWrapper}>
          <div className={styles.ratingIcons}>
            <div className={styles.ratingItems}>
              <img
                className={styles.vuesaxboldstarIcon}
                alt=""
                src="/vuesaxboldstar.svg"
              />
              <div className={styles.averageRatingsWrapper}>
                <div className={styles.averageRatings}>
                  4.9/5 Average Ratings
                </div>
              </div>
            </div>
            <div className={styles.ratingItems1}>
              <img
                className={styles.vuesaxboldawardIcon}
                alt=""
                src="/vuesaxboldaward.svg"
              />
              <div className={styles.winningAwardsWrapper}>
                <div className={styles.winningAwards}>25+ Winning Awards</div>
              </div>
            </div>
            <div className={styles.ratingItems2}>
              <img
                className={styles.vuesaxboldshieldTickIcon}
                alt=""
                src="/vuesaxboldshieldtick.svg"
              />
              <div className={styles.certifiedProductDesignerWrapper}>
                <div className={styles.certifiedProductDesigner}>
                  Certified Product Designer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
