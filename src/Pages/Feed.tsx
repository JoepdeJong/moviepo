import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

import { toast } from 'react-toastify';
import Header from '../Components/Header/Header';
import EpisodeList from '../Components/EpisodeList/EpisodeList';
import { parseRssFeed } from '../utils/functions';

const Feed = () => {
    let params = useParams();
    const navigate = useNavigate();
    const feeds = useAppSelector(state => state.xmlFeeds.feeds);

    const id: string = params.id!;

    const feed = feeds.find(feed => feed.id === id);

    if (!feed) {
        toast.error('Feed not found');
        navigate('/feeds');
    }

    return (
        <div>
            <Header/>
            <div className="block">
                <h2>{feed!.title}</h2>
                <p>{feed!.description}</p>
                <button className='button' onClick={() => parseRssFeed(feed!.url)}>Sync</button>
            </div>
            <EpisodeList feed={feed!} />
        </div>
    );
};

export default Feed;