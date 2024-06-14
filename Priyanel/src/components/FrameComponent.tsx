import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.shapeTrimmerParent, className].join(" ")}>
      <div className={styles.shapeTrimmer}>
        <h1 className={styles.letsConnectThere}>Lets Connect there</h1>
        <button className={styles.component12}>
          <div className={styles.hireMe}>Hire me</div>
          <img
            className={styles.iconOutlinedDirections}
            alt=""
            src="/icon--outlined--directions--straight-arrows--up-right-9.svg"
          />
        </button>
      </div>
      <img className={styles.frameChild} alt="" src="/line-5.svg" />
      <div className={styles.navigationMenuParent}>
        <div className={styles.navigationMenu}>
          <div className={styles.frameParent}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.typo}>
              <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
              <img className={styles.vectorIcon2} alt="" src="/vector-2.svg" />
              <img className={styles.vectorIcon3} alt="" src="/vector-3.svg" />
              <input className={styles.vector} type="checkbox" />
              <img className={styles.vectorIcon4} alt="" src="/vector-5.svg" />
            </div>
          </div>
          <p className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
          <div className={styles.anchorPoint}>
            <img
              className={styles.vuesaxboldfacebookIcon}
              loading="lazy"
              alt=""
              src="/vuesaxboldfacebook.svg"
            />
            <img
              className={styles.vuesaxboldyoutubeIcon}
              loading="lazy"
              alt=""
              src="/vuesaxboldyoutube.svg"
            />
            <img
              className={styles.vuesaxboldwhatsappIcon}
              loading="lazy"
              alt=""
              src="/vuesaxboldwhatsapp.svg"
            />
            <img
              className={styles.vuesaxboldinstagramIcon}
              loading="lazy"
              alt=""
              src="/vuesaxboldinstagram.svg"
            />
            <img
              className={styles.uiIcontwitterfilled}
              loading="lazy"
              alt=""
              src="/ui-icontwitterfilled.svg"
            />
          </div>
        </div>
        <div className={styles.blendMode}>
          <b className={styles.navigation}>Navigation</b>
          <div className={styles.strokeType}>
            <div className={styles.home}>Home</div>
            <a className={styles.aboutUs}>About Us</a>
            <div className={styles.service}>Service</div>
            <div className={styles.resume}>Resume</div>
            <a className={styles.project}>Project</a>
          </div>
        </div>
        <div className={styles.fontSize}>
          <b className={styles.contact}>Contact</b>
          <div className={styles.parent}>
            <div className={styles.div}>+91 7738443636</div>
            <div className={styles.jaycrea36gmailcom}>Jaycrea36@gmail.com</div>
            <div className={styles.portfolioJcreacom}>Portfolio-jcrea.com</div>
          </div>
        </div>
        <div className={styles.getTheLatestInformationParent}>
          <div className={styles.getTheLatest}>Get the latest information</div>
          <div className={styles.contactInfo}>
            <input
              className={styles.emailField}
              placeholder="Email Address"
              type="text"
            />
            <div className={styles.subPages}>
              <img
                className={styles.uiIconsendfilled}
                alt=""
                src="/ui-iconsendfilled.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img className={styles.frameItem} alt="" src="/line-5.svg" />
      <div className={styles.spacingControls}>
        <p className={styles.copyright2023Jayesh}>
          Copyright© 2023 Jayesh. All Rights Reserved.
        </p>
        <div
          className={styles.userTerms}
        >{`User Terms & Conditions | Privacy Policy`}</div>
      </div>
    </footer>
  );
};

export default FrameComponent;
