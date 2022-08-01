
import {default as FeedType}  from '../../Types/Feed';

import './Feed.scss';

const Feed = (feed: FeedType) => {

    const onClickHandler = () => {
        // Navigate to /video/{feed.streamMedia.id} in a new tab
        const baseUrl = process.env.PUBLIC_URL;
        // window.open(`${baseUrl}/video/${feed.streamMedia.id}`, '_blank');
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