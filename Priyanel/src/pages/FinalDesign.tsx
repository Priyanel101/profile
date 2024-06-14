import { FunctionComponent } from "react";
import HomePage from "../components/HomePage";
import AboutMePage from "../components/AboutMePage";
import ContactPage from "../components/ContactPage";
import GroupComponent from "../components/GroupComponent";
import FooterPage from "../components/FooterPage";
import styles from "./FinalDesign.module.css";

const FinalDesign: FunctionComponent = () => {
  return (
    <div className={styles.finalDesign}>
      <HomePage />
      <AboutMePage />
      <ContactPage />
      <div className={styles.contactPage}>
        <div className={styles.contactPageChild} />
        <div className={styles.contactPageItem} />
        <img
          className={styles.contactPageInner}
          alt=""
          src="/vector-186-1.svg"
        />
        <img className={styles.mailIcon} alt="" src="/mail@2x.png" />
        <img className={styles.keyboardIcon} alt="" src="/keyboard1@2x.png" />
        <div className={styles.lineDiv} />
        <div className={styles.wrapperBento}>
          <img className={styles.bentoIcon} alt="" src="/bento@2x.png" />
        </div>
        <div className={styles.wrapperBento2}>
          <img className={styles.bento2Icon} alt="" src="/bento2@2x.png" />
        </div>
        <div className={styles.wrapperBento1}>
          <img className={styles.bentoIcon1} alt="" src="/bento1@2x.png" />
        </div>
        <GroupComponent />
        <div className={styles.wrapperGroup5}>
          <img
            className={styles.wrapperGroup5Child}
            alt=""
            src="/group-5@2x.png"
          />
        </div>
        <div className={styles.awsServices}>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
          <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
          <img className={styles.ec21Icon} alt="" src="/ec2-1.svg" />
          <img className={styles.frameIcon2} alt="" src="/frame2.svg" />
          <img className={styles.frameIcon3} alt="" src="/frame3.svg" />
          <img className={styles.frameIcon4} alt="" src="/frame4.svg" />
          <img className={styles.frameIcon5} alt="" src="/frame5.svg" />
          <img className={styles.frameIcon6} alt="" src="/frame6.svg" />
          <img className={styles.frameIcon7} alt="" src="/frame7.svg" />
          <img className={styles.frameIcon8} alt="" src="/frame8.svg" />
          <img className={styles.frameIcon9} alt="" src="/frame9.svg" />
          <img className={styles.frameIcon10} alt="" src="/frame10.svg" />
          <img className={styles.frameIcon11} alt="" src="/frame11.svg" />
          <img className={styles.frameIcon12} alt="" src="/frame12.svg" />
          <img className={styles.frameIcon13} alt="" src="/frame13.svg" />
          <img className={styles.frameIcon14} alt="" src="/frame14.svg" />
          <img className={styles.frameIcon15} alt="" src="/frame15.svg" />
          <img className={styles.frameIcon16} alt="" src="/frame16.svg" />
          <img className={styles.frameIcon17} alt="" src="/frame17.svg" />
          <img className={styles.frameIcon18} alt="" src="/frame18.svg" />
          <img className={styles.frameIcon19} alt="" src="/frame19.svg" />
          <img className={styles.frameIcon20} alt="" src="/frame20.svg" />
          <img className={styles.frameIcon21} alt="" src="/frame21.svg" />
          <img className={styles.frameIcon22} alt="" src="/frame22.svg" />
          <img className={styles.frameIcon23} alt="" src="/frame23.svg" />
          <img className={styles.frameIcon24} alt="" src="/frame24.svg" />
          <div className={styles.more}>MORE!</div>
          <div className={styles.more1}>MORE!</div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default FinalDesign;
