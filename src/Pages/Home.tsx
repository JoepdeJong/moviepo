import { Link } from 'react-router-dom';
import EpisodeList from '../Components/EpisodeList/EpisodeList';
import Header from '../Components/Header/Header';
import XmlFeedForm from '../Components/XmlFeedForm/XmlFeedForm';
import { useAppSelector } from '../redux/hooks';

import './Home.scss';
const Home = () => {
    const xmlFeeds = useAppSelector(state => state.xmlFeeds);
    return (
        <div className='Home'>
            <Header/>
            {
                xmlFeeds.feedUrls.length > 0 ?
                <EpisodeList/> :
                <>
                    <div className="block">
                        <h2>No feeds available.</h2>
                        <p>Add a feed to start.</p>
                        <Link to="/feeds" className='button'>Add a feed</Link>
                    </div>
                </>
            }
        </div>
    );
};

export default Home;