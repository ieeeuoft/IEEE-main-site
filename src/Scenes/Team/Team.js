import React, { Component } from 'react'
import Team2019 from '../../Components/Team/Team2019.js'
import Footer from './../../Components/General/Footer/Footer.js'
import styles from './team.module.scss'
import TeamNav from '../../Components/Team/TeamNav/TeamNav.js';
import skylineLeft from './../../Assets/Images/skyline/skyline-left.svg';
import skylineRight from './../../Assets/Images/skyline/skyline-right.svg';
import YearDropdown from './../../Components/Team/YearDropdown/YearDropdown';
import Member from './../../Components/Team/Member/Member.js'
import OldTeam from './../../Components/Team/previousTeam'
// import * as memberList from './../../Assets/Lists/allMembers'
import members from './../../Assets/Lists/members.js'
//import membersJSON from './../../Assets/Lists/members';
//const members = () => JSON.parse(JSON.stringify(membersJSON));


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
        this.state = { teamKey: "execs", year:"2019-2020"}
    }


    showTeam(group) {
        this.setState({teamKey: group});
    }

    changeYear = (event) => {
        this.setState({
          year:event.target.value
        });

    }

    render() {

        var { teamKey } = this.state;
        return (
            <div>
                {/*<YearDropdown />*/}
                <div className={styles['select-year']}>
                    <div className={styles['triangle-down']}></div>
                    <select onChange={this.changeYear} value={this.state.value} id="great-names" className={styles['select-year-div']}>
                        <option value="2019-2020">2019-2020</option>

                        <option value="2018-2019">2018-2019</option>

                        <option value="2017-2018">2017-2018</option>

                        <option value="2016-2017">2016-2017</option>

                        <option value="2015-2016">Past Exec Team</option>
                    </select>
                </div>
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
                                members[this.state.year][0].execs.map((member, i) => {
                                    return (
                                        <Member fullName={member.fullName} position={member.position} year={this.state.year} />
                                    )
                                })
                            }
                        </div>
                    }

                    { (teamKey === "computer") &&
                        <div className={styles['row']}>
                            {
                                members[this.state.year][1].computer.map((member, i) => {
                                    return (
                                        <Member fullName={member.fullName} position={member.position} year={this.state.year} />
                                    )
                                })
                            }
                        </div>
                    }
                    { (teamKey === "electronics") &&
                        <div className={styles['row']}>
                            {
                                members[this.state.year][2].electronics.map((member, i) => {
                                    return (
                                        <Member fullName={member.fullName} position={member.position} year={this.state.year} />
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
