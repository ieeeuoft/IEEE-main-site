import React, { useState } from "react";
import styles from "./sponsors.module.scss";
import allSponsors from "./../../../Assets/Lists/allSponsors";
import Slider from "react-slick";
import Sponsor from "./Sponsor/Sponsor";

const Sponsors = () => {
    let settings = {
        dots: true,
        arrows: true,
        autoplaySpeed: 2500,
        autoplay: true,
        slidesToShow: 5,
        speed: 500,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                },
            },
        ],
    };

    const [compact, setCompact] = useState(true);

    return (
        <div id="sponsors" className={styles.sponsorsDiv}>
            <h2 className={styles.sponsorsDivHeading}>Our Sponsors</h2>
            <p onClick={() => setCompact(!compact)} className={styles.compactBtn}>
                {compact ? "expand" : "minimize"}
            </p>
            {compact ? (
                <div className={styles.sponsors}>
                    <Slider {...settings}>
                        {allSponsors.map((item, i) => (
                            <Sponsor
                                companyName={item.companyName}
                                tier={item.tier}
                                imgType={item.imgType}
                                siteLink={item.siteLink}
                            />
                        ))}
                    </Slider>
                </div>
            ) : (
                <div className={styles.spread}>
                    {allSponsors.map((item, i) => (
                        <Sponsor
                            companyName={item.companyName}
                            tier={item.tier}
                            imgType={item.imgType}
                            siteLink={item.siteLink}
                        />
                    ))}
                </div>
            )}
            ;
        </div>
    );
};

export default Sponsors;
