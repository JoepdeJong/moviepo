import EpisodeList from '../Components/EpisodeList/EpisodeList';
import Header from '../Components/Header/Header';
import XmlFeedForm from '../Components/XmlFeedForm/XmlFeedForm';

import './Home.scss';
const Home = () => {
    return (
        <div className='Home'>
            <Header/>
            <XmlFeedForm/>
            <EpisodeList/>
        </div>
    );
};

export default Home;