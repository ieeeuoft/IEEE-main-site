import React, { PureComponent } from 'react';
import styles from './upcomingEvent.module.scss'

export default class UpcomingEvent extends PureComponent {
    render() {
        const {
            link, 
            img, 
            EventName,
            EventDate
        } = this.props

        let imgSrc = './../../../../Assets/Images/events/' + {img} + '.png';

        return (
            <div className={styles['upcoming-event']}>
                <div className={styles['upcoming-event-img']}>
                    <a className={styles['upcoming-event-img-crop']} href={link} target="_blank">
                        <img src={imgSrc} alt={img} className={styles['upcoming-event-img-crop-src']} />
                    </a>
                </div>
                <h3 className={styles['upcoming-event-name']}>{EventName}</h3>
                <p className={styles['upcoming-event-date']}>{EventDate}</p>
            </div>
        );
    }
}


