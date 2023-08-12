import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./events.module.scss";
import EventEvent from "./EventEvent/EventEvent";
import allEvents from "./../../../Assets/Lists/allEvents";

const Events = () => {
    let settings = {
        dots: false,
        arrows: true,
        autoplaySpeed: 2500,
        autoplay: true,
        slidesToShow: 3,
        speed: 500,
        pauseOnHover: false,
    };

    const [compact, setCompact] = useState(true);
    return (
        <div className={styles.eventsDiv}>
            <h2 className={styles.eventsDivHeading}>Past Events</h2>
            <p onClick={() => setCompact(!compact)} className={styles.compactBtn}>
                {compact ? "expand" : "minimize"}
            </p>

            {compact ? (
                <div className={styles.events} id="events-carousel">
                    <Slider {...settings}>
                        {allEvents.map((item, i) => (
                            <EventEvent
                                EventName={item.EventName}
                                EventDate={item.displayDate}
                                link={item.link}
                            />
                        ))}
                    </Slider>
                </div>
            ) : (
                <div className={styles.spread}>
                    {allEvents.map((item, i) => (
                        <EventEvent
                            EventName={item.EventName}
                            EventDate={item.displayDate}
                            link={item.link}
                            spread={true}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Events;
