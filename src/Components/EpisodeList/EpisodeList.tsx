import React, { useEffect, useState } from 'react';
import {default as EpisodeType}  from '../../Types/Episode';
import Episode from '../Episode/Episode';

import './EpisodeList.scss';
import Feed from '../../Types/Feed';

type EpisodeListType = {
    feed: Feed;
}
const EpisodeList = ({feed}: EpisodeListType) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [episodes, setEpisodes] = useState<EpisodeType[]>([]);

    useEffect(() => {
        const items = feed.items;

        const filteredItems : EpisodeType[] = items.filter(item => {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        });

        setEpisodes(filteredItems);

    }, [feed, searchTerm]);

    return (
        <>
            <div className='block'>
                <input type='text' className='input' placeholder='Search for an episode' onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
            <div className='EpisodeList'>
                {episodes.map((episode: EpisodeType) => {
                    return (
                        <Episode key={episode.id} episode={episode} feed={feed}  />
                    )
                })}
            </div>
        </>
    );
};

export default EpisodeList;