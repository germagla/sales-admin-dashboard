import React, {useState} from 'react';
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
    const collapse = () => {
        setIsCollapsed(!isCollapsed);
    }


    return (
        <div>
            {isCollapsed && <div className={'side-nav'}>
                <div className={"sidebar-button"} id={"sidebar-menu-button"} onClick={collapse}>
                    <a>
                        <FontAwesomeIcon icon={faBars} color="white" size="2x"/>
                    </a>
                </div>
                <div className={"sidebar-button"}>
                    <a>
                        <FontAwesomeIcon icon={faMagnifyingGlass} color="#6B7280" size="2x"/>
                    </a>
                </div>
                <div className={"sidebar-button"}>
                    <a>
                        <FontAwesomeIcon id={"test"} icon={faHouseChimney} color="#6B7280" size="2x"/>
                    </a>
                </div>
                <div className={"sidebar-button"}>
                    <a>
                        <FontAwesomeIcon icon={faFileContract} color="#6B7280" size="2x"/>
                    </a>
                </div>
                <div className={"sidebar-button"}>
                    <a>
                        <FontAwesomeIcon icon={faChartLine} color="#6B7280" size="2x"/>
                    </a>
                </div>
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
                <div className={"sidebar-button-expanded"} id={"sidebar-menu-button-expanded"} onClick={collapse}>
                    <FontAwesomeIcon icon={faBars} color="white" size="2x"/>
                    <div className="logo-container">
                        <FontAwesomeIcon icon={faImage} size="2x" color="white"/>
                    </div>

                </div>
                <input placeholder={"Search... "} type={"text"} className={"sidebar-button-expanded"}
                       id={"sidebar-searchbar"}>
                    {/*<FontAwesomeIcon icon={faMagnifyingGlass} color="#6B7280" size="1x"/>*/}
                </input>
                <div className={"sidebar-button-expanded"}>
                    <a>
                        <FontAwesomeIcon icon={faHouseChimney} color="#6B7280" size="2x"/>
                    </a>
                </div>
                <div className={"sidebar-button-expanded"}>
                    <a>
                        <FontAwesomeIcon icon={faFileContract} color="#6B7280" size="2x"/>
                    </a>
                </div>
                <div className={"sidebar-button-expanded"}>
                    <a>
                        <FontAwesomeIcon icon={faChartLine} color="#6B7280" size="2x"/>
                    </a>
                </div>
                <div className={"sidebar-button-expanded"}>
                    <a>
                        <FontAwesomeIcon icon={faInbox} color="#6B7280" size="2x"/>
                    </a>
                </div>
                <div className={"sidebar-button-expanded"}>
                    <a>
                        <FontAwesomeIcon icon={faFileImage} color="#6B7280" size="2x"/>
                    </a>
                </div>
                <div className={"sidebar-button-expanded"}>
                    <a>
                        <FontAwesomeIcon icon={faCalendar} color="#6B7280" size="2x"/>
                    </a>
                </div>


                <div className={"sidebar-button-expanded"}>
                    <a>
                        <FontAwesomeIcon icon={faUserGroup} color="#6B7280" size="2x"/>
                    </a>
                </div>
                <div className={"sidebar-button-expanded"}>
                    <a>
                        <FontAwesomeIcon icon={faGear} color="#6B7280" size="2x"/>
                    </a>
                </div>

            </div>}
        </div>
    )
};

export default SideNav;