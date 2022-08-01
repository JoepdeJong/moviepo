import React from 'react';
import Header from '../Components/Header/Header';
import XmlFeedForm from '../Components/XmlFeedForm/XmlFeedForm';
import {default as FeedType} from '../Types/Feed';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import { removeFeed } from '../redux/slices/XmlFeedsSlice';

import './Feeds.scss';
import { parseRssFeed } from '../utils/functions';

const Feeds = () => {
    const xmlFeeds = useAppSelector(state => state.xmlFeeds);
    const dispatch = useAppDispatch();

    return (
        <div className='Feeds'>
            <Header/>
            <XmlFeedForm/>

            <ul className="Feeds__list">
                {xmlFeeds.feeds.map((feed: FeedType) => (
                    <li key={feed.id} className="Feeds__url">
                        <img src={feed.imageUrl} alt={feed.title} />
                        <div className="Feeds__info">
                            <h3>{feed.title}</h3>
                            <p>{feed.description}</p>

                            <a href={feed.url} target="_blank" rel="noreferrer">{feed.url}</a>
                            <p>Last synced at: {feed.syncedAt.toString()}</p>
                            <div className="Feeds__info__actions">
                                <button className='button' onClick={() => parseRssFeed(feed.url)}>Sync</button>
                                <button className='button button--danger' onClick={() => dispatch(removeFeed(feed.url))}>Remove</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Feeds;