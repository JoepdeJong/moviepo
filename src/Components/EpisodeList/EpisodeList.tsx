import React, { useEffect, useState } from 'react';
import {default as EpisodeType}  from '../../Types/Episode';
import Episode from '../Episode/Episode';

import data from './ExampleEpisodes';

import './EpisodeList.scss';

const EpisodeList = () => {
    const [episodes, setEpisodes] = useState<EpisodeType[]>([]);

    useEffect(() => {
        const exampleEpisodes: EpisodeType[] = data.data.episodes;
        setEpisodes(exampleEpisodes);

    }, []);

    return (
        <div className='EpisodeList'>
            {episodes.map((episode: EpisodeType) => {
                return (
                    <Episode key={episode.id} {...episode} />
                )
            })}
        </div>
    );
};

export default EpisodeList;