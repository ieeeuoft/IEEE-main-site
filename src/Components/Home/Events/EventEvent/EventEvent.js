import React from "react";
import styles from "./eventEvent.module.scss";

const EventEvent = ({ link, EventName, EventDate }) => {
    let EventNameChar = EventName;
    if (EventNameChar === "Hello, Con") {
        EventNameChar = "Hello, Con!";
    }

    return (
        <>
            {link === undefined && (
                <div className={styles["events-event"]} style={{ cursor: "default" }}>
                    <div className={styles["events-event-img"]}>
                        <div className={styles["events-event-img-crop"]}>
                            <div className={styles["dark-gradient"]}></div>
                            <img
                                src={require("./../../../../Assets/Images/events/" +
                                    EventName +
                                    ".JPG")}
                                alt={EventNameChar}
                                className={styles["events-event-img-crop-src"]}
                            />
                        </div>
                    </div>
                    <div className={styles["events-event-text"]}>
                        <h3 className={styles["events-event-text-name"]}>
                            {EventNameChar}
                        </h3>
                        <p className={styles["events-event-text-date"]}>{EventDate}</p>
                    </div>
                </div>
            )}

            {link && (
                <a
                    href={"http://" + link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["events-event"]}
                >
                    <div className={styles["events-event-img"]}>
                        <div className={styles["events-event-img-crop"]}>
                            <div className={styles["dark-gradient"]}></div>
                            <img
                                src={require("./../../../../Assets/Images/events/" +
                                    EventName +
                                    ".JPG")}
                                alt={EventNameChar}
                                className={styles["events-event-img-crop-src"]}
                            />
                        </div>
                    </div>
                    <div className={styles["events-event-text"]}>
                        <h3 className={styles["events-event-text-name"]}>
                            {EventNameChar}
                        </h3>
                        <p className={styles["events-event-text-date"]}>{EventDate}</p>
                    </div>
                </a>
            )}
        </>
    );
};

export default EventEvent;
