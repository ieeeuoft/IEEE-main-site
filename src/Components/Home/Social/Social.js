import React from 'react'
import { Link } from 'react-router-dom';
import styles from './social.module.scss'

const Social = () => {
    return (
        <div className={styles['social-containter']}>
        `   <a href="https://www.facebook.com/ieeeuoft/" className={styles['facebook-heading']}>Facebook</a>
            <a href="https://www.facebook.com/ieeeuoft/" className={styles['facebook-text']}>We post about our events and blah blah blah. Like us on Facebook.</a>
            <a href="https://www.facebook.com/ieeeuoft/" className={styles['facebook" target="_blank']}></a>
                
            <a href="https://www.facebook.com/ieeeuoft/" className={styles['newsletter-heading']}>Newsletter</a>
            <a href="https://www.facebook.com/ieeeuoft/" className={styles['newsletter-text']}>Sign up for our monthly newsletter. Receive information about IEEE UofT events, updates, and other useful stuff right in your inbox!</a>
            <a href="https://goo.gl/forms/dyVbc0fyJAZJ0Bbv1" className={styles['newsletter']} target="_blank"></a>
        
            <a href="https://www.facebook.com/ieeeuoft/" className={styles['membership-heading']}>IEEE Membership</a>
            <a href="https://www.facebook.com/ieeeuoft/" className={styles['membership-text']}>More than 80% discount for IEEE memberships and receive various exclusive benefits including job opportunities!</a>
            <a href="https://www.ieee.org/membership/join" className={styles['membership']} target="_blank"></a>
        </div>
    )
}

export default Social;


