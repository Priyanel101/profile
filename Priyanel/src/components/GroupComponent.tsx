import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.groupChild} />
      <div className={styles.groupItem} />
      <div className={styles.groupInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.groupChild1} />
      <div className={styles.groupChild2} />
      <div className={styles.groupChild3} />
      <div className={styles.groupChild4} />
      <div className={styles.groupChild5} />
      <div className={styles.groupChild6} />
      <div className={styles.groupChild7} />
      <div className={styles.groupChild8} />
      <div className={styles.groupChild9} />
      <div className={styles.groupChild10} />
      <div className={styles.groupChild11} />
      <div className={styles.groupChild12} />
      <div className={styles.groupChild13} />
      <div className={styles.groupChild14} />
      <div className={styles.groupChild15} />
      <div className={styles.groupChild16} />
      <div className={styles.groupChild17} />
      <div className={styles.groupChild18} />
      <div className={styles.groupChild19} />
      <div className={styles.groupChild20} />
      <div className={styles.groupChild21} />
      <div className={styles.groupChild22} />
      <div className={styles.groupChild23} />
      <div className={styles.svgSpinners3DotsBounce} />
    </div>
  );
};

export default GroupComponent;
