import React from 'react';
import "./Header.css"
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';
// import { pink } from '@mui/material/colors';




function Header() {
    return (
        <div className="mainn">
            <IconButton >
                <AccountCircleIcon fontSize='large' color="primary"/>
            </IconButton>
            <img
                className='logo'
                src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Logo.wine.svg"
                alt="logo" />
            <IconButton >
                <ForumIcon fontSize='large' color="success"/>
            </IconButton>
        </div>
    )
}

export default Header;

