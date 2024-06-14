import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent10 from "../components/FrameComponent10";
import Services from "../components/Services";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <Navigation1 />
      <section className={styles.instanceParent}>
        <FrameComponent11 />
        <FrameComponent10 />
      </section>
      <Services />
      <FrameComponent9 />
      <FrameComponent8 />
      <section className={styles.desktop1Inner}>
        <div className={styles.frameParent}>
          <div className={styles.letsHaveALookAtMyPortfolParent}>
            <h1 className={styles.letsHaveAContainer}>
              <span className={styles.letsHaveAContainer1}>
                <span>{`Lets have a look at my `}</span>
                <span className={styles.portfolio}>Portfolio</span>
              </span>
            </h1>
            <div className={styles.instanceWrapper}>
              <button className={styles.homeWrapper}>
                <b className={styles.home}>See All</b>
              </button>
            </div>
          </div>
          <FrameComponent6 />
          <div className={styles.dotsWrapper}>
            <div className={styles.dots}>
              <div className={styles.portfolioDotsContainer} />
              <div className={styles.portfolioDotsContainer1} />
              <div className={styles.portfolioDotsContainer2} />
              <div className={styles.portfolioDotsContainer3} />
            </div>
          </div>
          <FrameComponent5 />
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.liranteFoodDilverySolutioParent}>
                <h1 className={styles.liranteFood}>
                  Lirante - Food Dilvery Solution
                </h1>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/frame-10@2x.png"
                />
              </div>
              <p className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed lobortis orci elementum egestas
                lobortis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent4 />
      <FrameComponent3 />
      <section className={styles.componentInstanceTwo}>
        <div className={styles.component11}>
          <img
            className={styles.componentTwoContainer}
            alt=""
            src="/component-two-container@2x.png"
          />
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default Desktop;
