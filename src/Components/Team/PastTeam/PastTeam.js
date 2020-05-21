import React from "react";
import styles from "./pastTeam.module.scss";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from "react-accessible-accordion";

export default function OldTeam() {
    return (
        <Accordion
            className={styles["accordion"]}
            allowZeroExpanded={true}
            allowMultipleExpanded={true}
        >
            <AccordionItem className={styles["accordion__item"]}>
                <AccordionItemHeading>
                    <AccordionItemButton className={styles["accordion__button"]}>
                        2015-2016
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles["accordion__panel"]}>
                    <p>
                        <strong>Branch Chairs:</strong>
                    </p>
                    <ul>
                        <li>Co-Chair: Kei-Ming Kwong</li>
                        <li>Co-Chair: Susan Dang</li>
                    </ul>
                    <p>
                        <strong>Computer Technical Chapter</strong>
                    </p>
                    <ul>
                        <li>Chair: Elvis Gai</li>
                        <li>Vice Chair: Maggie Zhu</li>
                        <li>Director of Events: Zahra Sojoudi</li>
                        <li>Director of Events: Joller Wang</li>
                        <li>Director of Events: Nina Tai</li>
                        <li>Director of Events: Seung-Hun Chung</li>
                        <li>Director of Events: Arnav Goel</li>
                        <li>Director of Events: Yueming (Kathryn) Yu</li>
                        <li>Director of Events: Hao Wu</li>
                    </ul>
                    <p>
                        <strong>Electronics Technical Chapter</strong>
                    </p>
                    <ul>
                        <li>Chair: Russ Li</li>
                        <li>Vice Chair: Vicky Chen</li>
                        <li>Director of Events: Melinda Lu</li>
                        <li>Director of Events: Mingzhe (Franklin) Li</li>
                        <li>Director of Events: Sam Wang</li>
                        <li>Director of Events: Sarina Sit</li>
                        <li>Director of Events: Yan Aaron Wan</li>
                        <li>Director of Events: Erwin Lam</li>
                        <li>Director of Events: Tianyi (Bill) Yu</li>
                    </ul>
                    <p>
                        <strong>Power/Energy Technical Chapter</strong>
                    </p>
                    <ul>
                        <li>Chair: Muntaha Sakhi</li>
                        <li>Vice Chair: Shaoqi Ai</li>
                        <li>Director of Events: Kevin Tan</li>
                        <li>Director of Events: Lucy Wang</li>
                        <li>Director of Events: Yunhao (Kayla) Zhang</li>
                        <li>Director of Events: Claude Zhao</li>
                        <li>Director of Events: Xinran Li</li>
                    </ul>
                    <p>
                        <strong>Finance Committee</strong>
                    </p>
                    <ul>
                        <li>Director of Finance (Academic Funding): Ayushi Jain</li>
                        <li>Director of Finance (Industry Sponsorship): Alison Ma</li>
                        <li>Director of Finance: Allan Rui</li>
                    </ul>
                    <p>
                        <strong>Marketing Committee</strong>
                    </p>
                    <ul>
                        <li>Lead: Cathy Zhu</li>
                        <li>Director of Marketing: Ramya Prasad</li>
                        <li>Director of Marketing: Kathy Liu</li>
                        <li>Director of Marketing: Xinran Li</li>
                        <li>Director of Marketing: Henry Cho</li>
                        <li>Director of Marketing - Energy Chapter: Sharon Leung</li>
                        <li>Photographer: Jin Fang</li>
                        <li>Graphics Designer: Ashley Sheng</li>
                        <li>Graphics Designer: William (Weixi) Bi</li>
                    </ul>
                    <p>
                        <strong>Website Design</strong>
                    </p>
                    <ul>
                        <li>Webmaster: Gui Ming Jim Tang</li>
                        <li>Webmaster: Henry Zhou</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles["accordion__item"]}>
                <AccordionItemHeading>
                    <AccordionItemButton className={styles["accordion__button"]}>
                        2014-2015
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles["accordion__panel"]}>
                    <p>
                        <strong>Branch Chairs:</strong>
                    </p>
                    <ul>
                        <li>Executive Chair: Emily Miao</li>
                        <li>Executive Chair: David Li</li>
                    </ul>
                    <p>
                        <strong>Computer Technical Chapter</strong>
                    </p>
                    <ul>
                        <li>Chair: Aaron Wang</li>
                        <li>Webmaster: Mohak Poddar</li>
                        <li>Director of Events: Bryon Leung</li>
                        <li>Director of Events: Hao Wu</li>
                        <li>Director of Events: Mohammad Tabrizi</li>
                        <li>Director of Events: Zahra Sojoudi</li>
                        <li>Director of Events: Syed Talal Ashraf</li>
                        <li>Director of Events: SeyedAli Jokar Jandaghi</li>
                    </ul>
                    <p>
                        <strong>Electronics Technical Chapter</strong>
                    </p>
                    <ul>
                        <li>Chair: Kei-Ming Kwong</li>
                        <li>Vice Chair: Susan Dang</li>
                        <li>Director of Events: Yan Aaron Wan</li>
                        <li>Director of Events: Joy Chen</li>
                        <li>Director of Events: Danny Zhang</li>
                        <li>Director of Events: Russ Li</li>
                        <li>Director of Events: Luyuan Chen</li>
                        <li>Director of Events: Vicky Chen</li>
                        <li>Director of Events: Jane Liu</li>
                        <li>Director of Events: Melinda Lu</li>
                    </ul>
                    <p>
                        <strong>Power/Energy Technical Chapter</strong>
                    </p>
                    <ul>
                        <li>Chair: Lingfei Li</li>
                        <li>Vice Chair: Muntaha Sakhi</li>
                        <li>Director of Events: Kevin Tan</li>
                        <li>Director of Events: Shaoqi Ai</li>
                        <li>Director of Events: Seung-Hun Chung</li>
                        <li>Director of Events: Lucy Yang</li>
                    </ul>
                    <p>
                        <strong>Finance Committee</strong>
                    </p>
                    <ul>
                        <li>Chair: Piyush Gupta</li>
                        <li>Vice Chair: David Wang</li>
                        <li>Director of Internal Sponsorship: Grace Tian</li>
                    </ul>
                    <p>
                        <strong>Marketing Committee</strong>
                    </p>
                    <ul>
                        <li>Chair: Rami Abu Shammeh</li>
                        <li>Chair: Cathy Zhu</li>
                        <li>Videographer: Richard Lin</li>
                        <li>Photographer: Emma Chen</li>
                        <li>Director of Marketing: Jason Chong</li>
                        <li>Electronics Chapter Liason: Franklin Li</li>
                    </ul>
                    <p>
                        <strong>Conference Committee</strong>
                    </p>
                    <ul>
                        <li>Chair: Yoley Li</li>
                        <li>Vice Chair: Jin Fang</li>
                        <li>Director of External Relations: Amir Kharazmi</li>
                        <li>Director of External Relations: Joller Wang</li>
                        <li>Director of Logistics: Mustafa Shaikh</li>
                        <li>Director of Speakers: Devangini Mishra</li>
                        <li>Director of Design Competitions: Wei Chan Xiang</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem className={styles["accordion__item"]}>
                <AccordionItemHeading>
                    <AccordionItemButton className={styles["accordion__button"]}>
                        2013-2014
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles["accordion__panel"]}>
                    <p>
                        <strong>Executives:</strong>
                    </p>
                    <ul>
                        <li>Executive Chair: Michael Chai</li>
                        <li>Chair Advisor: Shahed Mirmohammadi</li>
                        <li>Chair of Electronics Chapter: David King Li</li>
                        <li>Chair of Professional Development: Emily Miao</li>
                        <li>Chair of Public Relations: Yvonne Zhang</li>
                        <li>Chair of Finance: Peter Nearing</li>
                        <li>
                            Chair of Women In Engineering and Power/Energy Chapter:
                            Yoley Li
                        </li>
                        <li>Vice Chair Women in Engineering: Alison Ma</li>
                        <li>Director of Campus Relations: Rami Abu Shammeh</li>
                        <li>Director of Marketing and Design: Yuqi Ma</li>
                        <li>Photographer: Elnaz Shokrollahi</li>
                        <li>Director of Media Promotion: Richard Lin</li>
                        <li>Webmaster: Aaron Wang</li>
                    </ul>
                    <p>
                        <strong>Computer/Electronics Technical Chapter:</strong>
                    </p>
                    <ul>
                        <li>Chair of Technical Chapter: David King Wai Li</li>
                        <li>Vice Chair of Technical Chapter: Emily Miao</li>
                        <li>Director of Computer Engineering: Mohak Poddar</li>
                        <li>Director of Industry Tours: Susan Dang</li>
                        <li>Director of Lab Tours: Emil Karimov</li>
                        <li>Officer of Professional Development: Yan Aaron Wan</li>
                        <li>Officer of Technical Events: Marcus Tan</li>
                        <li>Committee Advisor: Michael Chai</li>
                    </ul>

                    <p>
                        <strong>Power/Energy Technical Chapter:</strong>
                    </p>
                    <ul>
                        <li>Chair of Technical Chapter: Yoley Li</li>
                        <li>Vice Chair of Technical Chapter: Lingfei Li</li>
                        <li>Director of Professional Development: Lucy Zhao</li>
                        <li>Director of Industry Events: Muntaha Sakhi</li>
                        <li>Officer of Professional Development: Vacant</li>
                        <li>Committee Advisor: Michael Chai</li>
                    </ul>

                    <p>
                        <strong>Finance Committee:</strong>
                    </p>
                    <ul>
                        <li>Chair of Finance: Peter Nearing</li>
                        <li>
                            Director of Finance and External Sponsorship: David Wang
                        </li>
                        <li>
                            Director of Finance and Internal Sponsorship: Piyush Gupta
                        </li>
                        <li>Director of Finance and Membership Benefits: Grace Tian</li>
                        <li>Committee Advisor: Michael Chai</li>
                    </ul>

                    <p>
                        <strong>IEEE Toronto Section Website Revamp Project:</strong>
                    </p>
                    <ul>
                        <li>Project Lead: Eric Zhu</li>
                        <li>Web Designer: Seung-Hun</li>
                        <li>Web Designer: Krishna Gupta</li>
                        <li>Web Designer: Frank Tian</li>
                        <li>Web Designer: Aaron Wang</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem className={styles["accordion__item"]}>
                <AccordionItemHeading>
                    <AccordionItemButton className={styles["accordion__button"]}>
                        2011-2012
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles["accordion__panel"]}>
                    <ul>
                        <li>Chair: Chao Chen</li>
                        <li>Vice Chair Public Relations: Ray Luo</li>
                        <li>
                            Vice Chair Professional Development: Shahed Mirmohammadi
                        </li>
                        <li>Off Campus Rep: Wembo Yin</li>
                        <li>Chair Advisor: Hanxiao Wang</li>
                        <li>Chair, Women In Engineering: Setare Omidi</li>
                        <li>Treasurer: Michael Chai</li>
                        <li>Graduate Student Chair: Tang Tang</li>
                        <li>Secretary: Di Wu</li>
                        <li>Chief in Technology: Ao Wan</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem className={styles["accordion__item"]}>
                <AccordionItemHeading>
                    <AccordionItemButton className={styles["accordion__button"]}>
                        2010-2011
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles["accordion__panel"]}>
                    <ul>
                        <li>Chair: Haojun Liu</li>
                        <li>Chair Advisor: Pearl Cao</li>
                        <li>Vice Chair Public Relations: Farhad Dolatabadi</li>
                        <li>
                            Vice Chair Professional Development: Haoxiao (Cathy) Wang
                        </li>
                        <li>Secretary: Roozbeh Emami</li>
                        <li>Treasure: Gilbert Jiang</li>
                        <li>Chair Women In Engineering: Shahed Mirmohammadi</li>
                        <li>Chief in Technology: Chia Chen Tan</li>
                        <li>Chair Marketing and Promotion: Milad</li>
                        <li>Off Campus Rep: Chao Chen</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem className={styles["accordion__item"]}>
                <AccordionItemHeading>
                    <AccordionItemButton className={styles["accordion__button"]}>
                        2009-2010
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles["accordion__panel"]}>
                    <ul>
                        <li>Chair: Pearl Cao</li>
                        <li>Vice Chair Public Relations: Erkand Alushani</li>
                        <li>Vice Chair Professional Development: Elnaz Ghasemi</li>
                        <li>Secretary: Chao Chen</li>
                        <li>Treasurer: Hamed Shalileh</li>
                        <li>Chief in Technology: Farhad Dolatabadi</li>
                        <li>Off Campus Rep: Aditya Thakkar</li>
                        <li>Co-Chair Women in Engineering: Shahed Mirmohammadi</li>
                        <li>Co-Chair Women in Engineering: Navila Uddin</li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}
