import React, { PureComponent } from 'react';
import styles from './events.module.scss'

export default class Events extends PureComponent {
    render() {
        // const {
        //     item1,
        //     item2,
        //     topPlatform,
        //     topPlatformLink,
        //     topPlatformHandle,
        //     topPlatformFollowers
        // } = this.props

        return (
            <div className={styles['events-div']}>
                <h2 className={styles['events-div-heading']}>All Events</h2>

                <div className={styles['carousel events" id="events-carousel']}>  
                    <a className={styles['carousel-item && events-event']} href="https://www.facebook.com/ieeeuoft/" target="_blank">
                        <div className={styles['events-event-img']}>
                            <div className={styles['events-event-img-crop']}>
                                <img src="./../../../Assets/Images/events/Interview.jpg" alt="" className={styles['events-event-img-crop-src']} />
                            </div>
                        </div>
                        <div className={styles['events-event-text']}>
                            <h3 className={styles['events-event-text-name']}>Technical Interview Workshop</h3>
                            <p className={styles['events-event-text-date']}>September 28, 2019</p>
                        </div>
                    </a>
                    <a className={styles['carousel-item events-event" href="https://www.facebook.com/ieeeuoft/" target="_blank']}>
                        <div className={styles['events-event-img']}>
                            <div className={styles['events-event-img-crop']}>
                                <img src="./../../../Assets/Images/events/Hello, Con!.png" alt="" className={styles['events-event-img-crop-src']} />
                            </div>
                        </div>
                        <div className={styles['events-event-text']}>
                            <h3 className={styles['events-event-text-name']}>Hello, Con!</h3>
                            <p className={styles['events-event-text-date']}>November 16, 2019</p>
                        </div>
                    </a>
                    <a className={styles['carousel-item events-event" href="https://www.facebook.com/ieeeuoft/" target="_blank']}>
                        <div className={styles['events-event-img']}>
                            <div className={styles['events-event-img-crop']}>
                                <img src="./../../../Assets/Images/events/HardwareI.jpg" alt="" className={styles['events-event-img-crop-src']} />
                            </div>
                        </div>
                        <div className={styles['events-event-text']}>
                            <h3 className={styles['events-event-text-name']}>Hardware Introduction Workshop</h3>
                            <p className={styles['events-event-text-date']}>January 18, 2020</p>
                        </div>
                    </a>
                    <a className={styles['carousel-item events-event" href="https://www.facebook.com/ieeeuoft/" target="_blank']}>
                        <div className={styles['events-event-img']}>
                            <div className={styles['events-event-img-crop']}>
                                <img src="./../../../Assets/Images/events/HardwareII.jpg" alt="" className={styles['events-event-img-crop-src']} />
                            </div>
                        </div>
                        <div className={styles['events-event-text']}>
                            <h3 className={styles['events-event-text-name']}>Hardware Certification Workshop</h3>
                            <p className={styles['events-event-text-date']}>January 25, 2020</p>
                        </div>
                    </a>
                    <a className={styles['carousel-item events-event" href="https://www.facebook.com/ieeeuoft/" target="_blank']}>
                        <div className={styles['events-event-img']}>
                            <div className={styles['events-event-img-crop']}>
                                <img src="./../../../Assets/Images/events/MakeUofT.png" alt="" className={styles['events-event-img-crop-src']} />
                            </div>
                        </div>
                        <div className={styles['events-event-text']}>
                            <h3 className={styles['events-event-text-name']}>MakeUofT</h3>
                            <p className={styles['events-event-text-date']}>February 15-16, 2020</p>
                        </div>
                    </a>
                    <a className={styles['carousel-item events-event" href="https://www.facebook.com/ieeeuoft/" target="_blank']}>
                        <div className={styles['events-event-img']}>
                            <div className={styles['events-event-img-crop']}>
                                <img src="./../../../Assets/Images/events/NewHacks.JPG" alt="" className={styles['events-event-img-crop-src']} />
                            </div>
                        </div>
                        <div className={styles['events-event-text']}>
                            <h3 className={styles['events-event-text-name']}>NewHacks</h3>
                            <p className={styles['events-event-text-date']}>March 7-8, 2020</p>
                        </div>
                    </a>
                    <a className={styles['carousel-item events-event" href="https://www.facebook.com/ieeeuoft/" target="_blank']}>
                        <div className={styles['events-event-img']}>
                            <div className={styles['events-event-img-crop']}>
                                <img src="./../../../Assets/Images/events/Grad Talks.png" alt="" className={styles['events-event-img-crop-src']} />
                            </div>
                        </div>
                        <div className={styles['events-event-text']}>
                            <h3 className={styles['events-event-text-name']}>Grad Talks</h3>
                            <p className={styles['events-event-text-date']}>Ongoing</p>
                        </div>
                    </a>
                    <a className={styles['carousel-item events-event" href="https://www.facebook.com/ieeeuoft/" target="_blank']}>
                        <div className={styles['events-event-img']}>
                            <div className={styles['events-event-img-crop']}>
                                <img src="./../../../Assets/Images/events/Workshops.jpg" alt="" className={styles['events-event-img-crop-src']} />
                            </div>
                        </div>
                        <div className={styles['events-event-text']}>
                            <h3 className={styles['events-event-text-name']}>Workshops</h3>
                            <p className={styles['events-event-text-date']}>Ongoing</p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}