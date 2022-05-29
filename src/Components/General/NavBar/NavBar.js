import React, { useState, useEffect } from "react";
import styles from "./navBar.module.scss";
import logoBlue from "./../../../Assets/Images/logo/logo-blue.svg";
import logoBlueLeaf from "./../../../Assets/Images/logo/logo-blue-leaf.svg";
import { HashLink as Link } from "react-router-hash-link";
import { withRouter } from "react-router-dom";

const NavBar = ({ history }) => {
    const [logoClass, setLogoClass] = useState("");
    const [logoImg, setlogoImg] = useState(logoBlue);
    const [scrolled, setScrolled] = useState("");
    const [checked, setChecked] = React.useState(false);
    const [headerHidden, setHeaderHidden] = React.useState(false);
    const [prevScroll, setPrevScroll] = useState(window.pageYOffset);
    const teamPage = history.location.pathname === "/team";
    const shrink = teamPage ? 70 : 120;

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    useEffect(() => {
        function handleScroll() {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos > shrink) {
                setHeaderHidden(
                    prevScroll < currentScrollPos && prevScroll - currentScrollPos < 70
                );
            }
            setPrevScroll(currentScrollPos);
        }
    
        function getWindowHeight() {
            const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    
            if (distanceY >= shrink) {
                setLogoClass(styles.logoShrink);
                setlogoImg(logoBlueLeaf);
                setScrolled(styles.scrolled);
            } else if (distanceY < shrink) {
                setLogoClass("");
                setlogoImg(logoBlue);
                setScrolled("");
            }
        }
        
        window.addEventListener("scroll", getWindowHeight);
        window.addEventListener("scroll", handleScroll);

        return () => (
            window.removeEventListener("scroll", handleScroll),
            window.removeEventListener("scroll", getWindowHeight)
        );
    }, [headerHidden, prevScroll, shrink]);

    function closeNav() {
        setChecked(false);
    }

    const NavItem = ({ children }) => (
        <li onClick={() => closeNav()} className={styles.navListItem}>
            {children}
        </li>
    );

    return (
        <header
            className={`${styles.header} ${scrolled} ${teamPage && styles.teamPage} ${
                headerHidden && styles.headerHidden
            }`}
        >
            <Link smooth to={"/"} onClick={scrollToTop}>
                <div className={`${styles.logo} ${logoClass}`}>
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
