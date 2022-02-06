import React from 'react';
import './SwipeButton.css';
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import FlashOnIcon from '@mui/icons-material/FlashOn';


function SwipeButton() {
    return <div className='SwipeButton'>
        <IconButton className='SwipeButton_ReplayIcon swifeAll'>
            <ReplayIcon fontSize='large' />
        </IconButton>
        <IconButton className='SwipeButton_CloseIcon swifeAll'>
            <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton className='SwipeButton_FavoriteIcon swifeAll'>
            <FavoriteIcon fontSize='large' />
        </IconButton>
        <IconButton className='SwipeButton_StarIcon swifeAll'>
            <StarIcon fontSize='large' />
        </IconButton>
        <IconButton className='SwipeButton_FlashOnIcon swifeAll'>
            <FlashOnIcon fontSize='large' />
        </IconButton>
    </div>;
}

export default SwipeButton;
