import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navBar.module.scss';
import logoBlue from './../../../Assets/Images/logo/logo-blue.png';


const NavBar = () => {

    // let navColor = styles['nav-list'];
    // if (this.prop.backgroundIsWhite) {
    //     navColor += styles['blue-on-white'];
    // }

    return (
        <header className={styles['header']}>
            <div className={styles['logo']} id="logo"><img src={logoBlue} alt="Logo" className={styles['logo-img']} id="logo-img" /></div>
            <nav className={styles['nav']}>

                <input type="checkbox" id="check" className={styles['checkbox']} hidden />
                <div className={styles['hamburger-menu']}>
                    <label for="check" className={styles['menu']}>
                        <div className={styles['menu-line'] + " " + styles['menu-line-1']}></div>
                        <div className={styles['menu-line'] + " " + styles['menu-line-2']}></div>
                        <div className={styles['menu-line'] + " " + styles['menu-line-3']}></div>
                    </label>
                </div>

               
                <div className={styles['slideoutNav']}>
                    <ul className={styles['nav-list']}>
                        <Link to={'/'}>
                            <li className={styles['nav-list-item']} tab='0'>About</li>
                        </Link>
                        <Link to={'/team'}>
                            <li className={styles['nav-list-item']}>Our Team</li>
                        </Link>
                        <Link to={'/team'}>
                            <li className={styles['nav-list-item']}>Events</li>
                        </Link>
                        <Link to={'/team'}>
                            <li className={styles['nav-list-item']}>Join Us</li>
                        </Link>
                        <Link to={'/team'}>
                            <li className={styles['nav-list-item']}>Sponsors</li>
                        </Link>
                        <Link to={'/team'}>
                            <li className={styles['nav-list-item']}>Contact Us</li>
                        </Link>
                        {/* <li className={styles['nav-item']}><a href="" className={styles['nav-link']}>Events</a></li>
                        <li className={styles['nav-item']}><a href="" className={styles['nav-link']}>Join Us</a></li>
                        <li className={styles['nav-item']}><a href="" className={styles['nav-link']}>Sponsors</a></li>
                        <li className={styles['nav-item']}><a href="" className={styles['nav-link']}>Contact Us</a></li> */}
                    </ul>
                </div>
                
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