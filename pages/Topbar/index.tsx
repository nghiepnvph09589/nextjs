import React from "react";

import styles from "./styles.module.scss";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div
        className={styles.backToMarket}
      >{`<< Back to Affyn Marketplace`}</div>
      <div>
        <input
          type="search"
          className={styles.searchBox}
          placeholder="Search Cell ID / Lat, Lng / Google Map URL"
        />
      </div>
      <div className={styles.user}>Guest</div>
    </div>
  );
};

export default Topbar;
