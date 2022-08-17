import React from "react";

import styles from "./styles.module.scss";
import Image from 'next/image'

interface Props {
  src: string
}

const BtnSideBar = (props: Props) => {
  const { src } = props
  return (
    <div className={styles.btnSideBar}>
      <Image src={src} alt="Logo" width={35} height={36} />
    </div>
  );
};

export default BtnSideBar;
