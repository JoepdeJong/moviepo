import EpisodeList from '../Components/EpisodeList/EpisodeList';
import Header from '../Components/Header/Header';

import './Home.scss';
const Home = () => {
    return (
        <div className='Home'>
            <Header/>
            <EpisodeList/>
        </div>
    );
};

export default Home;