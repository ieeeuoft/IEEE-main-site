import React from 'react'
import styles from './landing.module.scss'
import skylineOutline from './../../../Assets/Images/skyline/skyline-outline.svg'
import skylineSolid from './../../../Assets/Images/skyline/skyline-solid.svg'

const Landing = () => {
    return (
        <div>
            <div className={styles['blue-background']}>
                <div className={styles['heading']}>
                    <h1 className={styles['heading-title']}>IEEE</h1>
                    <h2 className={styles['heading-subtitle']}>University of Toronto<br/>Student Branch</h2>
                </div>
                <img src={skylineSolid} alt="" className={styles['skyline-solid']} />
            </div>
            <div className={styles['heading-blue']}>
                <h2 className={styles['heading-blue-title']}>IEEE</h2>
                <h2 className={styles['heading-blue-subtitle']}>University of Toronto Student Branch</h2>
            </div>
            <div className={styles['no-background']}>
                <img src={skylineOutline} alt="" className={styles['skyline-outline']} />
            </div>
        </div>
    )
}
export default Landing;



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