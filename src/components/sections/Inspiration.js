import React from 'react';
import ReactPlayer from 'react-player';

const Inspiration = () => {
    return (
        <div className='inspiration mb-lg'>
            <h1 className='heading-1 mb-md'>
                Inspiration
            </h1>
            <div className='inspiration__content mb-lg'>
                <p className='inspiration__text'>
                    Valorie Kondos Field spoke in a great Tedtalk about her experience as the head gymnastics coach at UCLA.  She discusses how when she coached she had the mindset of "Winning = Success".  For the majority of my professional career I have had that same mindset.  In the past year I took a pause and really started to see that winning does not equal success.  For me, success is everything I am learning day to day.  I do not have to always be number one, as long as I continue to open myself up to growing as an indivudal I have succeeded.  
                </p>

                <div className='inspiration__player-wrapper'>
                    <ReactPlayer
                        className='inspiration__video'
                        url='https://www.youtube.com/watch?v=JJyeKiT8g4g'
                        controls
                    />
                </div>
            </div>
        </div>
    );
};

export default Inspiration;