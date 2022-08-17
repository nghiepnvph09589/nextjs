import React from "react";

import styles from "./styles.module.scss";
import Image from 'next/image'
import SideBar from "../SideBar";
import Topbar from "../Topbar";

interface Props {
  children?: React.ReactNode
}

const BarComponent = (props: Props) => {
  const { children } = props
  return (
    <div className={styles.container}>
      <SideBar />
      <div>
        <Topbar />
        {children}
      </div>
    </div>
  );
};

export default BarComponent;