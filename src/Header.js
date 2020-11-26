import React from "react";
import "./Header.css";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonOutlineIcon fontsize="large" className="header_icon"/>
            </IconButton>

            <img className="tinder_logo" src="data:image/png;base64,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"
            alt="" />

            <IconButton>
            <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>
            

            
            
        </div>
    );
}

export default Header;
