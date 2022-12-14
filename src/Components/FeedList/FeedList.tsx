import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import {default as FeedType} from '../../Types/Feed';
import Feed from '../Feed/Feed';

import './FeedList.scss';

const FeedList = () => {
    const feeds : FeedType[] = useAppSelector(state => state.xmlFeeds.feeds);

    if (feeds.length === 0) {
        return (
            <div className='FeedList'>
                <div className="block">
                    <h2>No feeds available.</h2>
                    <p>Add a feed to start.</p>
                    <Link to="/feeds" className='button'>Add a feed</Link>
                </div>
            </div>
        )
    }

    return (
        <div className='FeedList'>
            {feeds.map((feed: FeedType) => {
                return (
                    <Feed key={feed.id} {...feed} />
                )
            })}
        </div>
    );
};

export default FeedList;