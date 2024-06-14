import { FunctionComponent } from "react";
import styles from "./ContactPage.module.css";

export type ContactPageType = {
  className?: string;
};

const ContactPage: FunctionComponent<ContactPageType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.contactPage, className].join(" ")}>
      <div className={styles.contactPageChild} />
      <div className={styles.contactPageItem} />
      <img className={styles.contactPageInner} alt="" src="/vector-186-1.svg" />
      <img className={styles.mailIcon} alt="" src="/mail@2x.png" />
      <img className={styles.keyboardIcon} alt="" src="/keyboard@2x.png" />
      <div className={styles.lineDiv} />
      <div className={styles.gradient} />
      <div className={styles.skillsTxt}>
        <div className={styles.skills}>SKILLS</div>
        <b className={styles.softSkills}>soft skills</b>
        <div className={styles.iAmPleasedContainer}>
          <span>{`I am pleased to present a comprehensive portfolio highlighting my proficiency across diverse domains, encompassing `}</span>
          <b className={styles.programmingLanguages}>programming languages</b>
          <span>{`, `}</span>
          <b className={styles.tools}>tools</b>
          <span>{`, `}</span>
          <b className={styles.frameworks}>frameworks</b>
          <span>{`, `}</span>
          <b className={styles.concepts}>concepts</b>
          <span>{`, `}</span>
          <b className={styles.cloudServices}>cloud services</b>
          <span>{`, and essential `}</span>
          <b className={styles.softSkills1}>soft skills</b>
          <span>.</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
