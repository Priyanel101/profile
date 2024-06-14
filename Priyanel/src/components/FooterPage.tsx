import { FunctionComponent } from "react";
import styles from "./FooterPage.module.css";

export type FooterPageType = {
  className?: string;
};

const FooterPage: FunctionComponent<FooterPageType> = ({ className = "" }) => {
  return (
    <div className={[styles.footerPage, className].join(" ")}>
      <div className={styles.footerPageChild} />
      <div className={styles.frameParent}>
        <div className={styles.homeParent}>
          <img className={styles.homeIcon} alt="" src="/home.svg" />
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.userParent}>
          <img className={styles.userIcon} alt="" src="/user.svg" />
          <div className={styles.aboutMe}>About me</div>
        </div>
        <div className={styles.phoneParent}>
          <img className={styles.phoneIcon} alt="" src="/phone.svg" />
          <div className={styles.contact}>Contact</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <img className={styles.frameChild} alt="" src="/frame-24.svg" />
        <img className={styles.frameItem} alt="" src="/frame-24.svg" />
        <img className={styles.frameInner} alt="" src="/frame-24.svg" />
        <img className={styles.frameIcon} alt="" src="/frame-24.svg" />
      </div>
      <div className={styles.termsOfServicePrivacyPolWrapper}>
        <div className={styles.termsOfService}>
          Terms of Service - Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
