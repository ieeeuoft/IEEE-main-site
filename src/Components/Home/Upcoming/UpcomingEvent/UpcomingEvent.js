import React, { PureComponent } from 'react';
import styles from './upcomingEvent.module.scss'

export default class UpcomingEvent extends PureComponent {
    handleClick = (event) => {
        window.location.replace(event.value);
    }

    render() {
        const {
            link,
            EventName,
            EventDate
        } = this.props;

        let EventNameChar = EventName;
        if (EventNameChar == "Hello, Con") {
            EventNameChar = "Hello, Con!";
        }

        return (
            <>
            {(link === undefined) &&
                <div className={styles['upcoming-event']} style={{cursor: "default"}}>
                    <div className={styles['upcoming-event-img']}>
                        <div className={styles['upcoming-event-img-crop']}>
                            <img src={require('./../../../../Assets/Images/events/' + EventName + '.png')} alt={EventNameChar} className={styles['upcoming-event-img-crop-src']}/>
                        </div>
                    </div>
                    <h3 className={styles['upcoming-event-name']}>{EventNameChar}</h3>
                    <p className={styles['upcoming-event-date']}>{EventDate}</p>
                </div>
            }

            {link &&
                <a href={link} target="_blank" className={styles['upcoming-event']}>
                    <div className={styles['upcoming-event-img']}>
                        <div className={styles['upcoming-event-img-crop']}>
                            <img src={require('./../../../../Assets/Images/events/' + EventName + '.png')} alt={EventNameChar} className={styles['upcoming-event-img-crop-src']}/>
                        </div>
                    </div>
                    <h3 className={styles['upcoming-event-name']}>{EventNameChar}</h3>
                    <p className={styles['upcoming-event-date']}>{EventDate}</p>
                </a>
            }

            </>
        );
    }
}
