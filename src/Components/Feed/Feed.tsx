
import { useNavigate } from 'react-router-dom';
import {default as FeedType}  from '../../Types/Feed';

import './Feed.scss';

const Feed = (feed: FeedType) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/feed/${feed.id}`);
    }

    return (
        <div className='Feed' onClick={onClickHandler}>
            <div className="Feed__image">
                <img src={feed.imageUrl} alt={feed.title} />
            </div>
            <div className="Feed__info">
                <h3>{feed.title}</h3>
            </div>
        </div>
    )
}

export default Feed;