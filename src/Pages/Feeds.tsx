import React from 'react';
import Header from '../Components/Header/Header';
import XmlFeedForm from '../Components/XmlFeedForm/XmlFeedForm';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import { removeFeedUrl } from '../redux/slices/XmlFeedsSlice';

import './Feeds.scss';

const Feeds = () => {
    const xmlFeeds = useAppSelector(state => state.xmlFeeds);
    const dispatch = useAppDispatch();

    return (
        <div className='Feeds'>
            <Header/>
            <XmlFeedForm/>

            <ul className="Feeds__list">
                {xmlFeeds.feedUrls.map(feedUrl => (
                    <li key={feedUrl} className="Feeds__url">
                        <a href={feedUrl} target="_blank" rel="noreferrer">{feedUrl}</a>
                        <div className="button button--danger" onClick={() => dispatch(removeFeedUrl(feedUrl))}>Remove</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Feeds;