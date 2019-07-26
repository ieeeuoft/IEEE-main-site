import React, { PureComponent } from 'react';
import styles from './eventEvent.module.scss'
import imgSrc from './../../../../Assets/Images/events/MakeUofT.png';

export default class EventEvent extends PureComponent {
    render() {
        const {
            link, 
            img, 
            EventName,
            EventDate
        } = this.props

        // let imgSrc = './../../../../Assets/Images/events/' + img + '.png';

        return (
            <a className={styles['carousel-item'] + ' ' + styles['events-event']} href={link} target="_blank">
                <div className={styles['events-event-img']}>
                    <div className={styles['events-event-img-crop']}>
                        <div class={styles['dark-gradient']}></div>
                        <img src={imgSrc} alt={img} className={styles['events-event-img-crop-src']} />
                    </div>
                </div>
                <div className={styles['events-event-text']}>
                    <h3 className={styles['events-event-text-name']}>{EventName}</h3>
                    <p className={styles['events-event-text-date']}>{EventDate}</p>
                </div>
            </a>
        );
    }
}