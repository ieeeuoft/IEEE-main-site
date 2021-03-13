import React from "react";
import styles from "./sponsor.module.scss";

const Sponsor = ({ companyName, imgType, siteLink }) => (
    <a className={styles["sponsorsContainer"]} href={siteLink} target="__blank">
        <div className={styles["sponsorsContainerImgDiv"]}>
            <img
                src={require("./../../../../Assets/Images/sponsors/" +
                    companyName +
                    imgType)}
                alt={companyName}
                className={styles["sponsorsContainerImg"]}
            />
        </div>
    </a>
);

export default Sponsor;
