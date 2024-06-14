import { FunctionComponent } from "react";
import styles from "./HomePage.module.css";

export type HomePageType = {
  className?: string;
};

const HomePage: FunctionComponent<HomePageType> = ({ className = "" }) => {
  return (
    <div className={[styles.homePage, className].join(" ")}>
      <img className={styles.homePageChild} alt="" src="/ellipse-3.svg" />
      <img
        className={styles.doodlesMixedRound}
        alt=""
        src="/doodles-mixed-round.svg"
      />
      <div className={styles.homePageItem} />
      <div className={styles.homePageInner} />
      <div className={styles.lineDiv} />
      <div className={styles.homeParent}>
        <div className={styles.home}>Home</div>
        <div className={styles.aboutMe}>About Me</div>
        <div className={styles.contact}>Contact</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.hireMeWrapper}>
          <b className={styles.hireMe}>Hire me</b>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.downloadCvParent}>
            <b className={styles.downloadCv}>Download CV</b>
            <img className={styles.downloadIcon} alt="" src="/download.svg" />
          </div>
        </div>
      </div>
      <div className={styles.gradient} />
      <div className={styles.tpvi2ja6xtmekwe53znquTransforParent}>
        <img
          className={styles.tpvi2ja6xtmekwe53znquTransforIcon}
          alt=""
          src="/tpvi2ja6xtmekwe53znqutransformed1-1@2x.png"
        />
        <div className={styles.wrapperEllipse8}>
          <img className={styles.wrapperEllipse8Child} alt="" />
        </div>
        <img className={styles.groupChild} alt="" src="/vector-187.svg" />
        <b className={styles.chiaynePriyanelPahalahendricContainer}>
          <span>
            <span className={styles.chiaynePriyanel}>Chiayne Priyanel</span>
            <span className={styles.span}>{` `}</span>
          </span>
          <span className={styles.pahalahendricge}>Pahalahendricge</span>
        </b>
        <div className={styles.helloitsme}>Hello! It’s Me</div>
      </div>
      <img className={styles.frameIcon} alt="" src="/frame-7.svg" />
    </div>
  );
};

export default HomePage;
