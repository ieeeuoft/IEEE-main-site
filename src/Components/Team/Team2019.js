import React, { PureComponent } from 'react'
import styles from './team.module.scss'
import Member from './Member/Member.js'
import * as memberList from './../../Assets/Lists/allMembers'

export default class Team2019 extends PureComponent {
    // constructor(props) {
    //     super(props);
    //     this.state = { execs: false, mf: false, web: false, computer: false, electronics: false}
    // }

    // showTeam(group) {
    //     // if (group == "execs") {
    //     //     this.setState({execs: true});
    //     // } else if (group == "mf") {
    //     //     this.setState({mf: true});
    //     // } else if (group == "web") {
    //     //     this.setState({web: true});
    //     // } else if (group == "computer") {
    //     //     this.setState({computer: true});
    //     // } else if (group == "electronics") {
    //     //     this.setState({electronics: true});
    //     // } else if (group != "") {
    //         this.setState({teamState: group});
    //     // } 
    // }

    
    render() {

        const { teamkey } = this.props;

        return (
            
            <div className={styles['team-container']} id="team-2019-20">                
                { (teamkey === "execs") &&
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

                { (teamkey === "computer") &&
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
                { (teamkey === "electronics") &&
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
        );
    }
}