import React, { PureComponent } from 'react';
import Slider from "react-slick";
import styles from './events.module.scss'
import EventEvent from './EventEvent/EventEvent'
import * as eventList from './../../../Assets/Lists/allEvents'

export default class Sponsors extends PureComponent {
	render() {
		var settings = {
			dots: true,
			arrows: true,
			autoplaySpeed: 2500,
			autoplay: true,
			slidesToShow: 3,
			speed: 500, 
			pauseOnHover: false
		};
		return (
			<div className={styles['events-div']}>
				<h2 className={styles['events-div-heading']}>All Events</h2>
				<div className={styles['events']} id="events-carousel">
					<Slider {...settings}>
						{ eventList.allEvents.map((item, i) =>
							<EventEvent EventName={item.EventName} EventDate={item.displayDate} link={item.link} />
						)}
					</Slider>
				</div>
			</div>
		);
	}
}