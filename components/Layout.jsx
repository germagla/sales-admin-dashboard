import React from 'react';
import SideNav from "./SideNav";
import TopBar from "./TopBar";

function Layout({children}) {
    return (
        <div>
            <SideNav/>
            <TopBar/>
            {children}
        </div>
    );
}

export default Layout;