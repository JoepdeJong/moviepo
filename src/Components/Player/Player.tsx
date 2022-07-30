import React from 'react';
import ReactPlayer from 'react-player';

import './Player.scss';

type Props = {
    id: string;
};

const Player = ({id} : Props) => {
    return (
        <div className='Player'>
            <ReactPlayer url={`https://cdn.podimo.com/hls-media/${id}/stream_video_high/stream.m3u8`} controls={true} width="100%" height="100%" />
        </div>
    );
};

export default Player;