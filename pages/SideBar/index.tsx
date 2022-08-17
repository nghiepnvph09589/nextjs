import React from "react";

import styles from "./styles.module.scss";
import BtnSideBar from "./BtnSideBar";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <BtnSideBar src={'/ic_like.svg'} />
      <BtnSideBar src={'/ic_like.svg'} />
    </div>
  );
};

export default SideBar;
