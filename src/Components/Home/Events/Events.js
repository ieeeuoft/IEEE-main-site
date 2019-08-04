import React, { PureComponent } from 'react';
import Slider from "react-slick";
import styles from './events.module.scss'
import EventEvent from './EventEvent/EventEvent'
import * as eventList from './../../../Assets/Lists/allEvents'
import { Link } from 'react-router-dom';

export default class Sponsors extends PureComponent {
  render() {
    var settings = {
      dots: true,
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
                          <EventEvent EventName={item.EventName} EventDate={item.date} EventLink={item.link} />
                      )}
                  </Slider>
            </div>
        </div>
    );
  }
}



// import React, { PureComponent } from 'react';


// export default class Events extends PureComponent {
//     render() {
//         return (
//             <div className={styles['events-div']}>
//                 <h2 className={styles['events-div-heading']}>All Events</h2>

//                 <div className={styles['carousel events" id="events-carousel']}>
//                     <EventEvent EventName="Blah" EventDate="Blah" img="MakeUofT" link="www.facebook.com" />
//                     <EventEvent EventName="Blah" EventDate="Blah" img="MakeUofT" link="www.facebook.com" />
//                     <EventEvent EventName="Blah" EventDate="Blah" img="MakeUofT" link="www.facebook.com" />
//                 </div>
//             </div>
//         );
//     }
// }
