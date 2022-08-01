import FeedList from '../Components/FeedList/FeedList';
import Header from '../Components/Header/Header';

import './Home.scss';
const Home = () => {
    return (
        <div className='Home'>
            <Header/>
            <FeedList/>
        </div>
    );
};

export default Home;