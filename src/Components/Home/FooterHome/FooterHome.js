import React from 'react';
import styles from './footerHome.module.scss';
import Iframe from 'react-iframe';
import Copyright from '../../General/Copyright/Copyright';

const FooterHome = () => {
    return (
        <footer id="contactus" className={styles['footer']}>
            <h2 className={styles['footer-heading']}>Contact Us</h2>
            <div className={styles['footer-div']}>
                <div className={styles['footer-div-contact']}>
                    <h3 className={styles['footer-div-contact-heading']}>Email Us</h3>
                    <p className={styles['footer-div-contact-text']}>If you have any inquiries regarding our club, or would like to reach out to us about our events, please send us an email!</p>
                    <br/>
                    <a className={`${styles['footer-div-contact-text']} ${styles['email']}`} href="mailto:uoft@ieee.org">uoft@ieee.org</a>
                    <h3 className={styles['footer-div-contact-heading']}>Address</h3>
                    <p className={styles['footer-div-contact-text']}>The Institute of Electrical and Electronics Engineers<br/>University of Toronto Student Branch</p>
                    <br/>
                    <br/>
                    <p className={styles['footer-div-contact-text']}>
                        Room 339, Galbraith Building<br/>
                        35 St. George Street<br/>
                        University of Toronto<br/>
                        Toronto, Ontario, M5S 1A4
                    </p>    
                </div>
                <div className={styles['footer-div-map']}>
                    <Iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4249606181816!2d-79.39818148450202!3d43.660130979121156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b8a07fbbf9%3A0x90f0fb1c4148d634!2sGalbraith+Bldg%2C+Toronto%2C+ON+M5S+1A4!5e0!3m2!1sen!2sca!4v1454741799584" 
                        height="450" 
                        frameborder="0" 
                        style="border:0" 
                        allowfullscreen="" 
                        className={styles['footer-div-map-iframe']} 
                    />
                </div>
            </div>
            <Copyright />
        </footer>
    )
}

export default FooterHome;