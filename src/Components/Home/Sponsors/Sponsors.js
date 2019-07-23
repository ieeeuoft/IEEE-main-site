import React, { PureComponent } from 'react';
import styles from './sponsors.module.scss';
import Slider from "react-slick";
import Sponsor from './Sponsor/Sponsor';

export default class Sponsors extends PureComponent {
  render() {
    var settings = {
      dots: true,
      autoplaySpeed: 100,
      autoplay: true,
      slidesToShow: 5,
      speed: 3000
    };
    return (
        <div className={styles['sponsors-div']}>
            <h2 className={styles['sponsors-div-heading']}>Our Sponsors</h2> 
      
            <div className={styles['sponsors']}>

                {/* "container" + " " +  */}
                <Slider {...settings}>
                    <Sponsor tier="Gold" />
                    <Sponsor tier="Gold" />
                    <Sponsor tier="Gold" />
                    <Sponsor tier="Gold" />
                    <Sponsor tier="Gold" />
                    <Sponsor tier="Gold" />

                    
                    {/* <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div> */}
                    
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