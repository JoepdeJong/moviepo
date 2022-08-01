import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

import './Player.scss';

type Props = {
    id: string;
};

const Player = ({id} : Props) => {
    const navigate = useNavigate();

    // Validate if video stream exists
    useEffect(() => {
        //
    })

    const handleError = (error: any, data: any) => {
        if(data.response.code === 404) {
            alert('There is no video stream for this episode.');
            navigate('/');
        }
        console.log(data);
    }

    return (
        <div className='Player'>
            <ReactPlayer url={`https://cdn.podimo.com/hls-media/${id}/stream_video_high/stream.m3u8`} controls={true} width="100%" height="100%" onError={handleError} />
        </div>
    );
};

export default Player;