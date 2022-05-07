// @ts-nocheck
import React from "react";
import NavHeader from "./../../toolbox/navheader/NavHeader";
import Navigation from "./../../navigation/Navigation";
// !----------------------------------------------------------
import thinkwiceBlackLogo from "./../common/assets/svg/navigation-white-logo.svg";
const VacantionHeaderDash = () => {
    return (
        <div>
            <NavHeader textColor="nav-header-text-white" borderBgColor="nav-header-border-white"/>
            <Navigation
                logo={thinkwiceBlackLogo}
                enable={false}
                textColor="text-white"
                bgColor="bg-white"
                isArticle={false}
                isHeader={false}
                isPrivacy={false}/>
        </div>
    );
};

export default VacantionHeaderDash;