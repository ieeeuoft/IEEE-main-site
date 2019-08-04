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
import { tsImportEqualsDeclaration } from '@babel/types';

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

    constructRows(listOfMembers) {
        const members = []
        for (var i = 0; i < listOfMembers.length; i++){
            var member = listOfMembers[i]
            members.push(<Member fullName={member.fullName} position={member.position} year={member.year} />)
        }

        var numRows = Math.ceil(members.length / 7) * 2;
        var membersLeft = members.length
        const rows = []
        var ind = 0

        for (var i = 0; i < numRows; i++){
            if (membersLeft === 0){
                break;
            } else if (i % 2 === 0){ // 0, 2, 4, ... even row add 3 members
                var obj
                if (membersLeft >= 3){
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                          members[ind], members[ind + 1], members[ind + 2])
                    ind += 3
                    membersLeft -= 3
                } else if (membersLeft === 2){
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                          members[ind], members[ind + 1])
                } else if (membersLeft === 1){
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                          members[ind])
                }
            } else {          // 1, 3, 5, ... odd row add 4 members
                var obj
                if (membersLeft >= 3){
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                          members[ind], members[ind + 1], members[ind + 2], members[ind + 3])
                    ind += 4
                    membersLeft -= 4
                } else if (membersLeft === 3){
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                          members[ind], members[ind + 1], members[ind + 2])
                } else if (membersLeft === 2){
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                          members[ind], members[ind + 1])
                } else if (membersLeft === 1){
                    obj = React.createElement('div', {className:styles['row'], id:"team-2019-20"},
                          members[ind])
                }
            }
            rows.push(obj)
        }

        return (
            <div className={styles['team-container']} id="team-2019-20">
                {rows}
            </div>
        )
    }

    constructMemberChart() {
        // Add more categories for conditions not under 2019-2020; ie: Power/Energy Chapter from 2015-2016
        switch(this.state.teamKey){
            case "execs":
                return this.constructRows(memberList.execs)
            case "mf":
                return this.constructRows(memberList.execs)
            case "web":
                return this.constructRows(memberList.execs)
            case "computer":
                return this.constructRows(memberList.computer)
            case "electronics":
                return this.constructRows(memberList.electronics)
            case "etc": // TODO: add additional cases
                return this.constructRows(memberList.execs)    
            default:
                return (<div className={styles['team-container']} id="team-2019-20"></div>)
        }
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
                
                {this.constructMemberChart()}

                <div className={styles['skyline-imgs']}>
                    <img src={skylineLeft} alt="Skyline" className={styles['skyline-imgs-lr']} />
                    <img src={skylineRight} alt="Skyline" className={styles['skyline-imgs-lr']} />
                </div>
                <Footer />
            </div>
        )
    }
}

