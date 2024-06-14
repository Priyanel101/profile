import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.blogContentWrapper, className].join(" ")}>
      <div className={styles.blogContent}>
        <div className={styles.blogHeading}>
          <h1 className={styles.fromMyBlogPostContainer}>
            <span>
              <p className={styles.fromMy}>From my</p>
              <p className={styles.blogPost}>blog post</p>
            </span>
          </h1>
          <div className={styles.blogHomeButton}>
            <button className={styles.homeWrapper}>
              <b className={styles.home}>See All</b>
            </button>
          </div>
        </div>
        <div className={styles.blogPosts}>
          <div className={styles.instanceParent}>
            <div className={styles.blogPostContainerParent}>
              <img
                className={styles.blogPostContainer}
                alt=""
                src="/frame-60-3@2x.png"
              />
              <div className={styles.iconOutlinedDirectionsWrapper}>
                <img
                  className={styles.iconOutlinedDirections}
                  alt=""
                  src="/icon--outlined--directions--straight-arrows--up-right-3.svg"
                />
              </div>
            </div>
            <div className={styles.component6}>
              <div className={styles.uiuxDesign}>UI/ UX Design</div>
            </div>
            <div className={styles.blogPostAuthor}>
              <div className={styles.blogAuthorIconParent}>
                <div className={styles.blogAuthorIcon}>
                  <div className={styles.authorIcon} />
                </div>
                <div className={styles.jayeshPatil}>Jayesh Patil</div>
              </div>
              <div className={styles.blogPostDate}>
                <div className={styles.dateIconWrapper}>
                  <div className={styles.dateIcon} />
                </div>
                <div className={styles.nov2023}>10 Nov, 2023</div>
              </div>
            </div>
            <h2 className={styles.designUnraveledBehindTheContainer}>
              <p className={styles.designUnraveledBehind}>
                Design Unraveled: Behind
              </p>
              <p className={styles.theScenesOf}>the Scenes of UI/UX Magic</p>
            </h2>
          </div>
          <FrameComponent2
            frame60="/frame-60-4@2x.png"
            nov2023="09 Oct, 2023"
            designUnraveledBehindTheS="Sugee: Loan Management System for Rural Sector."
          />
          <FrameComponent2
            frame60="/frame-60-5@2x.png"
            nov2023="13 Aug, 2023"
            designUnraveledBehindTheS="Cinetrade: Innovative way to invest in Digital Media"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
