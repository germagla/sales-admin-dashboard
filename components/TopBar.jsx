import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faImage, faUser} from "@fortawesome/free-solid-svg-icons";
import {dashboardData} from "/pages/index"
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";


function TopBar(props) {
    return (
        <div className={"top-bar"}>
            <div className="logo-container">
                <FontAwesomeIcon icon={faImage}  size="2x" color="#6B7280"/>
            </div>
            <div className="user-info-container">
                <span className="user-name">{dashboardData.user.full_name.toUpperCase()}</span>
                <span className="user-settings-shortcut"><a href="#" id="account-settings">Account Settings</a></span>
                <div className="user-avatar">
                    <FontAwesomeIcon icon={faUserCircle} size="2x" color="#6B7280"/>
                </div>
            </div>
        </div>
    );
}

export default TopBar;