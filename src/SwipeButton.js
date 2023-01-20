import React from 'react';

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
import './SwipeButton.css';

function SwipeButton({ handleClick, people, setPeople }) {
    const handleLike = () => {
        // Remove the last person from people array
        setPeople(people.slice(0, -1));
        //database.collection('people').doc(person.id).update({ liked: true });
    };

    const handleDislike = () => {
        // Remove the last person from people array
        setPeople(people.slice(0, -1));

        //database.collection('people').doc(person.id).update({ liked: false });
    };

    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_left" onClick={handleDislike}>
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_star" onClick={handleLike}>
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_right" onClick={handleLike}>
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_lightning">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    );
}

export default SwipeButton;
