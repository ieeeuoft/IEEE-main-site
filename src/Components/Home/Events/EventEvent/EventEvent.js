import React from "react";
import styles from "./eventEvent.module.scss";

const EventContent = ({ name, date }) => {
    let imgSrc;
    try {
        imgSrc = require("./../../../../Assets/Images/events/" + name + ".jpg");
    } catch (err) {
        imgSrc = require("./../../../../Assets/Images/events/Workshops.jpg");
    }

    return (
        <>
            <div className={styles["events-event-img"]}>
                <div className={styles["events-event-img-crop"]}>
                    <div className={styles["dark-gradient"]}></div>
                    <img
                        src={imgSrc}
                        alt={name}
                        className={styles["events-event-img-crop-src"]}
                    />
                </div>
            </div>
            <div className={styles["events-event-text"]}>
                <h3 className={styles["events-event-text-name"]}>{name}</h3>
                <p className={styles["events-event-text-date"]}>{date}</p>
            </div>
        </>
    );
};

const EventEvent = ({ link, EventName, EventDate }) => (
    <>
        {link === undefined && (
            <div className={styles["events-event"]} style={{ cursor: "default" }}>
                <EventContent name={EventName} date={EventDate} />
            </div>
        )}

        {link && (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles["events-event"]} ${styles["events-event-hover"]}`}
            >
                <EventContent name={EventName} date={EventDate} />
            </a>
        )}
    </>
);

export default EventEvent;
