import React from "react";
import styles from "./toTop.module.scss";

const ToTop = () => (
    <div
        className={styles.toTop}
        onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }}
    >
        <div className={styles.toTopArrow} />
    </div>
);

export default ToTop;
