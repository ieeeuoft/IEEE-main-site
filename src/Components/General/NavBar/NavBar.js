import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import styles from './navBar.module.scss';
import logoBlue from './../../../Assets/Images/logo/logo-blue.svg';
import logoBlueLeaf from './../../../Assets/Images/logo/logo-blue-leaf.svg';

export default class NavBar extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { logoClass: "", logoBackground: "", logoImg: logoBlue }
    }

    componentDidMount =
        // scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
        () => { window.addEventListener('scroll', this.getWindowHeight)}; 
    
    
    componentWillUnmount =
        () => { window.removeEventListener('scroll', this.getWindowHeight)}; 

    //then create the method
    getWindowHeight = () => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop;
        const shrinkOn = 200;
        console.log(distanceY)
        if (distanceY > shrinkOn) {
            this.setState({ logoClass: styles['logoShrink'], logoImg: logoBlueLeaf}) 
        }

        if (distanceY > 300) {
            this.setState({ logoBackground: styles['logoBackground'] });
        }

        if (distanceY === 0) {
            this.setState({ logoClass: styles['logoGrow'], logoImg: logoBlue }) 
        }

        if (distanceY < shrinkOn) {
            this.setState({logoBackground: ""});
        }
    }

    // contextTypes = {
    //     router: React.PropTypes.object,
    //     location: React.PropTypes.object
    // }

    render() {
        var { logoClass, logoImg, logoBackground } = this.state;
        
        // var currentLocation = this.props.location.pathname;
        let zindex = {zIndex: 100}
        // if (this.context.location.pathname ==="team") {
        //     zindex = {zIndex: -1}
        // }

        return (
            <header className={styles['header']} style={zindex}> 
                <div className={`${styles['logo']} ${logoClass} ${logoBackground}`}>
                    <img src={logoImg} alt="Logo" className={styles['logo-img']}/>
                </div>
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
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}