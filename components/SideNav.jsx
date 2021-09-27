import React, {useState} from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBars,
    faCalendar,
    faChartLine,
    faFileContract,
    faFileImage,
    faGear,
    faHouseChimney,
    faImage,
    faInbox,
    faMagnifyingGlass,
    faUserGroup
} from "@fortawesome/free-solid-svg-icons";


const SideNav = () => {

    const [isCollapsed, setIsCollapsed] = useState(true);
    const collapse = e => {
        e.preventDefault();
        setIsCollapsed(!isCollapsed);
    }


    return (
        <div>
            {isCollapsed && <div className={'side-nav'}>
                <div className={"sidebar-button"} id={"sidebar-menu-button"} onClick={e => collapse(e)}>
                    <a>
                        <FontAwesomeIcon icon={faBars} color="white" size="2x"/>
                    </a>
                </div>
                <div className={"sidebar-button"}>
                    <a>
                        <FontAwesomeIcon icon={faMagnifyingGlass} color="#6B7280" size="2x"/>
                    </a>
                </div>
                <Link href = "/">
                    <div className={"sidebar-button"}>
                        <a>
                            <FontAwesomeIcon id={"test"} icon={faHouseChimney} color="#6B7280" size="2x"/>
                        </a>
                    </div>
                </Link>
                <div className={"sidebar-button"}>
                    <a>
                        <FontAwesomeIcon icon={faFileContract} color="#6B7280" size="2x"/>
                    </a>
                </div>
                <Link href={"/visitors"}>
                    <div className={"sidebar-button"}>
                        <a>
                            <FontAwesomeIcon icon={faChartLine} color="#6B7280" size="2x"/>
                        </a>
                    </div>
                </Link>
                <div className={"sidebar-button"}>
                    <a>
                        <FontAwesomeIcon icon={faInbox} color="#6B7280" size="2x"/>
                    </a>
                </div>
                <div className={"sidebar-button"}>
                    <a>
                        <FontAwesomeIcon icon={faFileImage} color="#6B7280" size="2x"/>
                    </a>
                </div>
                <div className={"sidebar-button"}>
                    <a>
                        <FontAwesomeIcon icon={faCalendar} color="#6B7280" size="2x"/>
                    </a>
                </div>


                <div className={"sidebar-button"}>
                    <a>
                        <FontAwesomeIcon icon={faUserGroup} color="#6B7280" size="2x"/>
                    </a>
                </div>
                <div className={"sidebar-button"}>
                    <a>
                        <FontAwesomeIcon icon={faGear} color="#6B7280" size="2x"/>
                    </a>
                </div>

            </div>}
            {!isCollapsed && <div className={'side-nav-expanded'}>
                <div className={"sidebar-button-expanded"} id={"sidebar-menu-button-expanded"} onClick={e => collapse(e)}>
                    <FontAwesomeIcon icon={faBars} color="white" size="2x"/>
                    <div className="logo-container">
                        <FontAwesomeIcon icon={faImage} size="2x" color="white"/>
                    </div>

                </div>
                <input placeholder={"Search..."} type={"text"} className={"sidebar-button-expanded font-awesome"}
                       id={"sidebar-searchbar"}>
                </input>
                <Link href = "/">
                    <div className={"sidebar-button-expanded"}>
                        <FontAwesomeIcon icon={faHouseChimney} color="#6B7280" size="2x"/>
                        <div>DASHBOARD (SALES)</div>
                    </div>
                </Link>
                <div className={"sidebar-button-expanded"}>
                    <FontAwesomeIcon icon={faFileContract} color="#6B7280" size="2x"/>
                    <div>REPORTS</div>

                </div>
                <Link href={"/visitors"}>
                    <div className={"sidebar-button-expanded"}>
                        <FontAwesomeIcon icon={faChartLine} color="#6B7280" size="2x"/>
                        <div>ANALYTICS (VISITORS)</div>
                    </div>
                </Link>
                <div className={"sidebar-button-expanded"}>
                    <FontAwesomeIcon icon={faInbox} color="#6B7280" size="2x"/>
                    <div>INBOX</div>
                </div>
                <div className={"sidebar-button-expanded"}>
                    <FontAwesomeIcon icon={faFileImage} color="#6B7280" size="2x"/>
                    <div>MEDIA (KITSU API)</div>
                </div>
                <div className={"sidebar-button-expanded"}>
                    <FontAwesomeIcon icon={faCalendar} color="#6B7280" size="2x"/>
                    <div>CALENDAR</div>

                </div>


                <div className={"sidebar-button-expanded"}>
                    <FontAwesomeIcon icon={faUserGroup} color="#6B7280" size="2x"/>
                    <div>USERS</div>

                </div>
                <div className={"sidebar-button-expanded"}>
                    <FontAwesomeIcon icon={faGear} color="#6B7280" size="2x"/>
                    <div>SETTINGS</div>

                </div>

            </div>}
        </div>
    )
}

export default SideNav;