import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import EpisodeList from '../Components/EpisodeList/EpisodeList';
import FeedList from '../Components/FeedList/FeedList';
import Header from '../Components/Header/Header';
import XmlFeedForm from '../Components/XmlFeedForm/XmlFeedForm';
import { useAppSelector } from '../redux/hooks';
import { parseRssFeed } from '../utils/functions';

import './Home.scss';
const Home = () => {
    const xmlFeeds = useAppSelector(state => state.xmlFeeds);

    useEffect(() => {

        parseRssFeed('http://localhost:3000/moviepo/data/feed.xml');
    }, []);
    
    return (
        <div className='Home'>
            <Header/>
            <FeedList/>
        </div>
    );
};

export default Home;