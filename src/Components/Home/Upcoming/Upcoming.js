import React, { PureComponent } from 'react';
import styles from './upcoming.module.scss'

export default class Upcoming extends PureComponent {
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
            <div className={styles['upcoming-div']}>
                <h2 className={styles['upcoming-div-heading']}>Upcoming Events</h2>
                <div className={styles['upcoming']}>
                    <div className={styles['upcoming-event']}>
                        <div className={styles['upcoming-event-img']}>
                            <a className={styles['upcoming-event-img-crop']} href="https://www.facebook.com/ieeeuoft/" target="_blank">
                                <img src="images/events/Interview.jpg" alt="" className={styles['upcoming-event-img-crop-src']} />
                            </a>
                        </div>
                        <h3 className={styles['upcoming-event-name']}>Technical Interview Workshop</h3>
                        <p className={styles['upcoming-event-date']}>September 28, 2019</p>
                    </div>
                    <div className={styles['upcoming-event']}>
                        <div className={styles['upcoming-event-img']}>
                            <a className={styles['upcoming-event-img-crop" href="https://www.facebook.com/ieeeuoft/" target="_blank']}>
                                <img src="images/events/Hello, Con!.png" alt="" className={styles['upcoming-event-img-crop-src']} />
                            </a>
                        </div>
                        <h3 className={styles['upcoming-event-name']}>Hello, Con! 2019</h3>
                        <p className={styles['upcoming-event-date']}>November 16, 2019</p>
                    </div>
                    <div className={styles['upcoming-event']}>
                        <div className={styles['upcoming-event-img']}>
                            <a className={styles['upcoming-event-img-crop']} href="https://www.facebook.com/ieeeuoft/" target="_blank">
                                <img src="images/events/HardwareI.jpg" alt="" className={styles['upcoming-event-img-crop-src']} />
                            </a>
                        </div>
                        <h3 className={styles['upcoming-event-name']}>Hardware Introduction Workshop</h3>
                        <p className={styles['upcoming-event-date']}>January 18, 2020</p>
                    </div>
                </div>
            </div>
        );
    }
}