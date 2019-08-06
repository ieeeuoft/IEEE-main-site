import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import styles from './navBar.module.scss';
import logoBlue from './../../../Assets/Images/logo/logo-blue.png';

export default class NavBar extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { logoClass: "" }
    }

    componentDidMount =
        // scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
        () => { window.addEventListener('scroll', this.getWindowHeight)}; 
    
    
    componentWillUnmount =
        () => { window.removeEventListener('scroll', this.getWindowHeight)}; 
    
    

    //then create the method
    getWindowHeight = () => {
        const distanceY = window.pageYOffset;// || document.documentElement.scrollTop;
        const shrinkOn = "200px";

        //Now In the condition change the state to smaller so if the condition is true it will change to smaller otherwise to default state
        if (distanceY > shrinkOn) {
            this.setState({ logoClass: "logoShrink" }) 
        }
    }


    render() {
        var { logoClass } = this.state;

        return (
            <header className={styles['header']}> 
                <div className={`${styles['logo']} ${logoClass}`} ref="about" >
                    <img src={logoBlue} alt="Logo" className={styles['logo-img']} id="logo-img" />
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

    

    // componentDidMount() {
    //     window.addEventListener('scroll', this.growShrinkLogo);
    // }
    
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.growShrinkLogo);
    // }

    // growShrinkLogo = () => {
        // const distanceY = window.pageYOffset || document.documentElement.scrollTop;
        // const shrinkOn = 100;

        // //Now In the condition change the state to smaller so if the condition is true it will change to smaller otherwise to default state
        // if (distanceY > shrinkOn) {
        //     this.setState({
        //         logoClass: "logoShrink"
        //     });
        // }

        // let eTop = this.ref.about.offset().top;
        //     if (eTop - window.scrollTop() > 800) {
        //     // $(".logo").height(200); //screen.width*0.5/6
        //         // $(".logo").animate({height: 200}, 500);
        //         // $("#logo-img").attr("src","images/logo/logo-blue.png");
        //         this.setState({
        //             logoClass: "logoShrink"
        //         });
        //     } else if (eTop - window.scrollTop() <= 800) {
        //         // $(".logo").animate({height: 50}, 500);
        //         // $("#logo-img").attr("src","images/logo/logo-blue-leaf.png");  
        //         this.setState({
        //             logoClass: ""
        //         });
        //     }
    // }

    // constructor(props) {
    //     super(props);
    //     this.state = { logoClass: "" };
    // }
    
    //   //use the lifecycle methods to trigger the getWindowHeight method.
    
    //   componentDidMount(){
    //      () => {
    //       window.addEventListener('scroll', this.getWindowHeight);
    //      }
    //   }
    
    //   componentWillUnmount(){
    //     () => {
    //       window.removeEventListener('scroll', this.getWindowHeight);
    //     }
    //   }
    
    //   //then create the method
    //   getWindowHeight = () {
    
    //     const distanceY = window.pageYOffset ||
    //       document.documentElement.scrollTop
    //     const shrinkOn = "200px";
    
    //     //Now In the condition change the state to smaller so if the condition is true it will change to smaller otherwise to default state
    //     if (distanceY > shrinkOn) {
    //       this.setState({
    //         class: "smaller"
    //       })
    //     }
    //   }



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

        // var scrollToElement = require('scroll-to-element');
 
        // scrollToElement('#id');
         
        // // with options
        // scrollToElement('.className', {
        //     offset: 0,
        //     ease: 'out-bounce',
        //     duration: 1500
        // });
         
        // // or if you already have a reference to the element
        // var elem = document.querySelector('.className');
        // scrollToElement(elem, {
        //     offset: 0,
        //     ease: 'out-bounce',
        //     duration: 1500
        // });