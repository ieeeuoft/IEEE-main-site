import React, { PureComponent } from 'react';
import styles from './sponsors.module.scss';
import * as sponsorList from './../../../Assets/Lists/allSponsors';
import Slider from "react-slick";
import Sponsor from './Sponsor/Sponsor';

export default class Sponsors extends PureComponent {
  render() {
    var settings = {
      // dots: true,
      autoplaySpeed: 100,
      autoplay: true,
      slidesToShow: 5,
      // slidesToShow: 3,
      speed: 3000,
      pauseOnHover: false,
      responsive : [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    };

    return (
        <div id="sponsors" className={styles['sponsors-div']}>
            <h2 className={styles['sponsors-div-heading']}>Our Sponsors</h2> 
            <div className={styles['sponsors']}>
                <Slider {...settings}>
                    {sponsorList.allSponsors.map((item, i) =><Sponsor companyName={item.companyName} tier={item.tier} imgType={item.imgType} siteLink={item.siteLink}/> )}  
                </Slider>
            </div>
        </div>  
    );
  }
}



// import pic1 from './../../../Assets/Images/sponsors/sponsor1.png';
// import InfiniteCarousel from 'react-leaf-carousel';
// import Slider from "react-slick";

// export default class Sponsors extends PureComponent {
//     render() {
//         var settings = {
//             dots: true,
//             autoplaySpeed: 1000,
//             autoplay: true,
//             slidesToShow: 2,
//             speed: 3000
//         };
//         return (
//             <div className={styles['sponsors-div']}>
//                 {/* <h2 className={styles['sponsors-div-heading']}>Our Sponsors</h2>
//                 <div className={styles['sponsors']}> */}
//                 <Slider {...settings}>
//                     <div>
//                         <img src={pic1} />
//                     </div>
//                     <div>
//                         <img src={pic1} />
//                     </div>
//                     <div>
//                         <img src={pic1} />
//                     </div>
//                     <div>
//                         <img src={pic1} />
//                     </div>
//                     </Slider>
//                     {/* <InfiniteCarousel
//                         dots={true}
//                         showSides={true}
//                         sidesOpacity={.5}
//                         sideSize={.1}
//                         slidesToScroll={4}
//                         slidesToShow={4}
//                         scrollOnDevice={true}
//                         lazyLoad={true}
//                         animationDuration={200}
//                         pauseOnHover={true}
//                     >
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                         <div>
//                             <img alt='' src={pic1} />
//                         </div>
//                     </InfiniteCarousel> */}
                    
//                  {/* </div> */}
//             </div>
//         );
//     }
// }

// import React from "react";