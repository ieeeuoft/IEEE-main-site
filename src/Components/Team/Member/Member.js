import React from "react";
import styles from "./member.module.scss";
import Email from "./../../../Assets/Images/team/icons/email.svg";
import LinkedIn from "./../../../Assets/Images/team/icons/linkedin.svg";

const Member = ({ fullName, position, year, emailLink, LinkedInLink, baby, puppy }) => {
    let extension = "/";
    if (baby) {
        extension = "/babies/";
    } else if (puppy) {
        extension = "/puppies/";
    } else if (!puppy && !baby) {
        extension = "/";
    }

    let imgSrc;
    try {
        imgSrc = require("./../../../Assets/Images/team/" +
            year +
            extension +
            fullName +
            ".jpg");
    } catch (err) {
        imgSrc = require("./../../../Assets/Images/team/placeholder.png");
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardCrop}>
                <img className={styles.cardCropImg} src={imgSrc} alt={fullName} />
            </div>
            <p className={styles.cardTitle}>{position}</p>
            <p className={styles.cardName}>{fullName}</p>
            <div className={styles.cardBtn}>
                {emailLink && (
                    <a href={`mailto:${emailLink}`} className={styles.cardBtnEmail} target="_blank">
                        <img
                            src={Email}
                            className={styles.cardBtnEmailIcon}
                            alt="Email"
                        />
                    </a>
                )}
                {LinkedInLink && (
                    <a href={LinkedInLink} className={styles.cardBtnLinkedin} target="_blank">
                        <img
                            src={LinkedIn}
                            className={styles.cardBtnLinkedinIcon}
                            alt="LinkedIn"
                        />
                    </a>
                )}
            </div>
        </div>
    );
};

export default Member;
