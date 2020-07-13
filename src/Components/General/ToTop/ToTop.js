import React from "react";
import styles from "./toTop.module.scss";

const ToTop = () => (
    <div
        className={styles["to-top"]}
        onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }}
    >
        <div className={styles["to-top-arrow"]}></div>
    </div>
);

export default ToTop;
