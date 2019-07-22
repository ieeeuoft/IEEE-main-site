import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navBar.module.scss';
import logoBlue from './../../../Assets/Images/logo/logo-blue.png';


const NavBar = () => {

    let navColor = styles['nav-list'];
    // if (this.prop.backgroundIsWhite) {
    //     navColor += styles['blue-on-white'];
    // }

    return (
        <header className={styles['header']}>
            <div className={styles['logo']} id="logo"><img src={logoBlue} alt="Logo" className={styles['logo-img']} id="logo-img" /></div>
            <nav className={styles['nav']}>
                <ul className={navColor}>
                    <li className={styles['nav-item']}><a href="" className={styles['nav-link']} tab='0'>About</a></li>
                    <Link to={'/team'}>
                        <li className={styles['nav-item']}><a href="" className={styles['nav-link']}>Our Team</a></li>
                    </Link>
                    <li className={styles['nav-item']}><a href="" className={styles['nav-link']}>Events</a></li>
                    <li className={styles['nav-item']}><a href="" className={styles['nav-link']}>Join Us</a></li>
                    <li className={styles['nav-item']}><a href="" className={styles['nav-link']}>Sponsors</a></li>
                    <li className={styles['nav-item']}><a href="" className={styles['nav-link']}>Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;


// <div className={styles.navDiv}>
// <img className={styles.navLogo} src={logo} alt="Trendr" />
// <nav className={styles.navBar}>
//     
//     <Link to={'/info'}>
//         <PeopleIcon />
//     </Link>
//     <Link to={'/radar'}>
//         <SignalCellularAltIcon />
//     </Link>
//     <FaceIcon />
//     <Link to={'/info'}>
//         <InfoIcon />
//     </Link>
//     <SettingsIcon />
// </nav>
// </div>