import { FunctionComponent } from "react";
import FrameComponent12 from "./FrameComponent12";
import styles from "./FrameComponent11.module.css";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: FunctionComponent<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.authorNameParent}>
          <div className={styles.authorName}>
            <div className={styles.datePublished}>
              <div className={styles.emailAddressField}>
                <div className={styles.socialMediaIconsParent}>
                  <button className={styles.socialMediaIcons}>
                    <div className={styles.hello}>Hello!</div>
                  </button>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
              </div>
              <div className={styles.imJennyProductDesignerContainer}>
                <p className={styles.imJenny}>
                  <span className={styles.im}>{`I’m `}</span>
                  <span className={styles.jenny}>Jenny</span>
                  <span>,</span>
                </p>
                <p className={styles.productDesigner}>Product Designer</p>
              </div>
              <img
                className={styles.datePublishedChild}
                loading="lazy"
                alt=""
                src="/vector-21.svg"
              />
            </div>
          </div>
          <div className={styles.blogPostIconLink}>
            <img
              className={styles.vuesaxboldquoteUpIcon}
              loading="lazy"
              alt=""
              src="/vuesaxboldquoteup.svg"
            />
            <p className={styles.jennysExceptionalProductContainer}>
              <span className={styles.jennysExceptionalProduct}>
                Jenny’s Exceptional product design
              </span>
              <span className={styles.ensureOurWebsites}>
                ensure our website’s success.
              </span>
              <span className={styles.highlyRecommended}>
                Highly Recommended
              </span>
            </p>
          </div>
          <div className={styles.portfolioLinkParent}>
            <div className={styles.portfolioLink}>
              <img
                className={styles.portfolioLinkChild}
                alt=""
                src="/ellipse-2.svg"
              />
              <div className={styles.hireLinkParent}>
                <button className={styles.hireLink}>
                  <div className={styles.portfolioWrapper}>
                    <a className={styles.portfolio}>Portfolio</a>
                  </div>
                  <img
                    className={styles.iconOutlinedDirections}
                    alt=""
                    src="/icon--outlined--directions--straight-arrows--up-right.svg"
                  />
                </button>
                <div className={styles.buttonContainer}>
                  <div className={styles.hireButton}>
                    <div className={styles.hireMe}>Hire me</div>
                  </div>
                </div>
              </div>
              <div className={styles.decoration}>
                <div className={styles.dotsContainer}>
                  <div className={styles.dots}>
                    <img
                      className={styles.dotsChild}
                      alt=""
                      src="/group-10@2x.png"
                    />
                    <img className={styles.dotsItem} alt="" />
                    <img className={styles.vectorIcon} alt="" />
                  </div>
                </div>
                <img className={styles.vectorIcon1} alt="" />
                <img className={styles.vectorIcon2} alt="" />
                <img className={styles.vectorIcon3} alt="" />
                <img className={styles.vectorIcon4} alt="" />
                <img className={styles.vectorIcon5} alt="" />
                <div className={styles.workExperiences}>
                  <div className={styles.experienceList}>
                    <div className={styles.experienceItem}>
                      <img className={styles.vectorIcon6} alt="" />
                      <img className={styles.vectorIcon7} alt="" />
                      <div className={styles.experienceDetails}>
                        <img
                          className={styles.vectorIcon8}
                          alt=""
                          src="/vector-14.svg"
                        />
                        <div className={styles.responsibilities}>
                          <div className={styles.responsibilitiesList}>
                            <img
                              className={styles.responsibilitiesListChild}
                              alt=""
                              src="/group-7@2x.png"
                            />
                            <img className={styles.vectorIcon9} alt="" />
                            <img
                              className={styles.responsibilitiesListItem}
                              alt=""
                              src="/group-5@2x.png"
                            />
                            <img
                              className={styles.responsibilitiesListInner}
                              alt=""
                              src="/group-4@2x.png"
                            />
                            <img
                              className={styles.groupIcon}
                              alt=""
                              src="/group-6@2x.png"
                            />
                            <img className={styles.vectorIcon10} alt="" />
                          </div>
                        </div>
                      </div>
                      <img className={styles.vectorIcon11} alt="" />
                      <img
                        className={styles.experienceItemChild}
                        alt=""
                        src="/group-8@2x.png"
                      />
                    </div>
                  </div>
                  <FrameComponent12 />
                </div>
                <img
                  className={styles.verticalDecorationIcon}
                  alt=""
                  src="/vector-14.svg"
                />
              </div>
            </div>
            <img
              className={styles.youngPrettyWomanLookingHapIcon}
              alt=""
              src="/youngprettywomanlookinghappygoofywithbroadfunloonysmileeyeswideopenagainstwhitewall-2@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.rating}>
        <div className={styles.componentHeader}>
          <div className={styles.ratingStars}>
            <img
              className={styles.iconstar}
              loading="lazy"
              alt=""
              src="/iconstar.svg"
            />
            <img className={styles.iconstar1} alt="" src="/iconstar.svg" />
            <img className={styles.iconstar2} alt="" src="/iconstar.svg" />
            <img className={styles.iconstar3} alt="" src="/iconstar.svg" />
            <img className={styles.iconstar4} alt="" src="/iconstar.svg" />
          </div>
          <div className={styles.fromMyBlog}>
            <b className={styles.years}>10 Years</b>
            <div className={styles.experince}>Experince</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
