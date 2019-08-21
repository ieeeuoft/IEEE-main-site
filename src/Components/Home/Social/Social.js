import React from 'react'
import styles from './social.module.scss'
import ScrollAnimation from 'react-animate-on-scroll';

const Social = () => {
    return (
        <div id="joinus" className={styles['social-containter']}>
            {/* <ScrollAnimation animateOnce={true} duration={1} offset={80} animateIn="fadeInUp" className={styles['social-containter']} style={{gridArea: "2/1/-1/4", zIndex: 99}}> */}
                <a href="https://www.facebook.com/ieeeuoft/" className={styles['facebook-heading']}>Facebook</a>
                <a href="https://www.facebook.com/ieeeuoft/" className={styles['facebook-text']}>Like us on Facebook to get the latest updates on our events and registration.</a>
                    
                <a href="https://www.facebook.com/ieeeuoft/" className={styles['newsletter-heading']}>Newsletter</a>
                <a href="https://www.facebook.com/ieeeuoft/" className={styles['newsletter-text']}>Sign up for our monthly newsletter. Receive information about IEEE UofT events, updates, and other useful stuff right in your inbox!</a>
            
                <a href="https://www.facebook.com/ieeeuoft/" className={styles['membership-heading']}>IEEE Membership</a>
                <a href="https://www.facebook.com/ieeeuoft/" className={styles['membership-text']}>More than 80% discount for IEEE memberships and receive various exclusive benefits including job opportunities!</a>
            {/* </ScrollAnimation> */}
            <a href="https://www.facebook.com/ieeeuoft/" className={styles['facebook']} target="_blank"></a>
            <a href="https://goo.gl/forms/dyVbc0fyJAZJ0Bbv1" className={styles['newsletter']} target="_blank"></a>
            <a href="https://www.ieee.org/membership/join" className={styles['membership']} target="_blank"></a>
        </div>
    )
}

export default Social;


