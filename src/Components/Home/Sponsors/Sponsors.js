import React, { PureComponent } from "react";
import styles from "./sponsors.module.scss";
import * as sponsorList from "./../../../Assets/Lists/allSponsors";
import Slider from "react-slick";
import Sponsor from "./Sponsor/Sponsor";

export default class Sponsors extends PureComponent {
    render() {
        var settings = {
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

        return (
            <div id="sponsors" className={styles["sponsors-div"]}>
                <h2 className={styles["sponsors-div-heading"]}>Our Sponsors</h2>
                <div className={styles["sponsors"]}>
                    <Slider {...settings}>
                        {sponsorList.allSponsors.map((item, i) => (
                            <Sponsor
                                companyName={item.companyName}
                                tier={item.tier}
                                imgType={item.imgType}
                                siteLink={item.siteLink}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
