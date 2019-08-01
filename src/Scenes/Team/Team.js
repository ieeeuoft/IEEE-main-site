import React, { Component } from 'react'
import Team2019 from '../../Components/Team/Team2019.js'
import Footer from './../../Components/General/Footer/Footer.js'
import styles from './team.module.scss'
import TeamNav from '../../Components/Team/TeamNav/TeamNav.js';
import skylineLeft from './../../Assets/Images/skyline/skyline-left.svg';
import skylineRight from './../../Assets/Images/skyline/skyline-right.svg';
import YearDropdown from './../../Components/Team/YearDropdown/YearDropdown';
import Member from './../../Components/Team/Member/Member.js'
import * as memberList from './../../Assets/Lists/allMembers'

// export default class Team extends Component {
//     render() {
//         return (
//             <div>
//                 <YearDropdown />
//                 {/* <TeamNav /> */}
                
//                 <Team2019 />
//                 <div className={styles['skyline-imgs']}>
//                     <img src={skylineLeft} alt="Skyline" className={styles['skyline-imgs-lr']} />
//                     <img src={skylineRight} alt="Skyline" className={styles['skyline-imgs-lr']} />
//                 </div>
//                 <Footer />
//             </div>
//         )
//     }
// }

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = { teamKey: "execs"}
    }

    showTeam(group) {
        this.setState({teamKey: group});
    }

    render() {

        var { teamKey } = this.state;
        return (
            <div>
                <YearDropdown />
                {/* <TeamNav /> */}
                <nav className={styles['team-nav']}>
                    <ul className={styles['team-nav-list']}>
                        <li className={styles['team-nav-list-item']} onClick={() => this.showTeam("execs")}>Exec Team</li>
                        <li className={styles['team-nav-list-item']} onClick={() => this.showTeam("mf")}>Marketing & Finance</li>
                        <li className={styles['team-nav-list-item']} onClick={() => this.showTeam("web")}>Webmasters</li>
                        <li className={styles['team-nav-list-item'] + ' ' + styles['computer-nav-item']} onClick={() => this.showTeam("computer")}>Computer Chapter</li>
                        <li className={styles['team-nav-list-item']  + ' ' + styles['electronics-nav-item']} onClick={() => this.showTeam("electronics")}>Electronics Chapter</li>
                    </ul>
                </nav>
                
                {/* <Team2019 teamKey={this.state.teamState} />  */}

                <div className={styles['team-container']} id="team-2019-20">                
                    { (teamKey === "execs") &&
                        <div className={styles['row']}>
                            {
                                memberList.execs.map((member, i) => {
                                    return (
                                        <Member fullName={member.fullName} position={member.position} year={member.year} />
                                    )
                                })
                            }
                        </div>    
                    }

                    { (teamKey === "computer") &&
                        <div className={styles['row']}>
                            {
                                memberList.computer.map((member, i) => {
                                    return (
                                        <Member fullName={member.fullName} position={member.position} year={member.year} />
                                    )
                                })
                            }
                        </div>    
                    }
                    { (teamKey === "electronics") &&
                        <div className={styles['row']}>
                            {
                                memberList.electronics.map((member, i) => {
                                    return (
                                        <Member fullName={member.fullName} position={member.position} year={member.year} />
                                    )
                                })
                            }
                        </div>    
                    }
                </div>

                <div className={styles['skyline-imgs']}>
                    <img src={skylineLeft} alt="Skyline" className={styles['skyline-imgs-lr']} />
                    <img src={skylineRight} alt="Skyline" className={styles['skyline-imgs-lr']} />
                </div>
                <Footer />
            </div>
        )
    }
}

