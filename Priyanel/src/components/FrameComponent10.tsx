import { FunctionComponent } from "react";
import FrameComponent12 from "./FrameComponent12";
import styles from "./FrameComponent10.module.css";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.instanceWrapper, className].join(" ")}>
      <FrameComponent12
        propAlignSelf="unset"
        propFlexWrap="unset"
        propFlex="unset"
        propMinWidth="unset"
      />
    </div>
  );
};

export default FrameComponent10;
