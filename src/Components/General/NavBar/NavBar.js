import React, { useState, useEffect } from "react";
import styles from "./navBar.module.scss";
import logoBlue from "./../../../Assets/Images/logo/logo-blue.svg";
import logoBlueLeaf from "./../../../Assets/Images/logo/logo-blue-leaf.svg";
import { HashLink as Link } from "react-router-hash-link";
import { withRouter } from "react-router-dom";

const NavBar = ({ history }) => {
    const [logoClass, setLogoClass] = useState("");
    const [logoBackground, setLogoBackground] = useState("");
    const [logoImg, setlogoImg] = useState(logoBlue);
    const [scrolled, setScrolled] = useState("");
    const [checked, setChecked] = React.useState(false);
    const teamPage = history.location.pathname === "/team";

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    function getWindowHeight() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop;
        const shrink = teamPage ? 70 : 120;

        if (distanceY >= shrink) {
            setLogoBackground(styles.logoBackground);
            setLogoClass(styles.logoShrink);
            setlogoImg(logoBlueLeaf);
            setScrolled(styles.scrolled);
        } else if (distanceY < shrink) {
            setLogoBackground("");
            setLogoClass(styles.logoGrow);
            setlogoImg(logoBlue);
            setScrolled("");
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", getWindowHeight);
    });

    function closeNav() {
        setChecked(false);
    }

    const NavItem = ({children}) => (
        <li
            onClick={() => closeNav()}
            className={styles.navListItem}
        >
            {children}
        </li>
    );

    return (
        <header
            className={`${styles.header} ${scrolled} ${teamPage && styles.teamPage}`}
        >
            <Link smooth to={"/"} onClick={scrollToTop}>
                <div className={`${styles.logo} ${logoClass} ${logoBackground}`}>
                    <img src={logoImg} alt="Logo" className={styles.logoImg} />
                </div>
            </Link>

            <nav className={styles.nav}>
                <input
                    type="checkbox"
                    id="check"
                    className={styles.checkbox}
                    hidden
                    checked={checked ? "checked" : ""}
                />
                <div
                    className={styles.hamburgerMenu}
                    onClick={() => setChecked(!checked)}
                >
                    <label for="check" className={styles.menu}>
                        <div className={`${styles.menuLine} ${styles.menuLine1}`} />
                        <div className={`${styles.menuLine} ${styles.menuLine2}`} />
                        <div className={`${styles.menuLine} ${styles.menuLine3}`} />
                    </label>
                </div>

                <div className={styles.slideoutNav}>
                    <ul className={styles.navList}>
                        <Link smooth to={"/#about"}>
                            <NavItem>About</NavItem>
                        </Link>
                        <Link to={"/team"}>
                            <NavItem>Our Team</NavItem>
                        </Link>
                        <Link smooth to={"/#events"}>
                            <NavItem>Events</NavItem>
                        </Link>
                        <Link smooth to={"/#joinus"}>
                            <NavItem>Join Us</NavItem>
                        </Link>
                        <Link smooth to={"/#sponsors"}>
                            <NavItem>Sponsors</NavItem>
                        </Link>
                        <Link smooth to={"/#contactus"}>
                            <NavItem>Contact Us</NavItem>
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default withRouter(NavBar);
