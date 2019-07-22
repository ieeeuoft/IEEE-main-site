import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navBar.module.scss'

const NavBar = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['logo']} id="logo"><img src="images/logo/logo-blue.png" alt="" className={styles['logo-img']} id="logo-img" /></div>
            <nav className={styles['nav']}>
                <ul className={styles['nav-list']}>
                    <li className={styles['nav-item']}><a href="" className={styles['nav-link']} tab='0'>About</a></li>
                    <li className={styles['nav-item']}><a href="team.html" className={styles['nav-link']}>Our Team</a></li>
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
//     <Link to={'/'}>
//         <HomeIcon />
//     </Link>
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