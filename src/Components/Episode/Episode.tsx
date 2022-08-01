
import {default as EpisodeType}  from '../../Types/Episode';
import {default as FeedType} from '../../Types/Feed';

import './Episode.scss';

type FeedEpisodeType = {
    feed: FeedType;
    episode: EpisodeType;
}
const Episode = ({feed, episode} : FeedEpisodeType) => {
    const onClickHandler = () => {
        // Navigate to /video/{episode.id} in a new tab
        const baseUrl = process.env.PUBLIC_URL;
        window.open(`${baseUrl}/video/${episode.id}`, '_blank');
    }

    return (
        <div className='Episode' onClick={onClickHandler}>
            <div className="Episode__image">
                <img src={feed.imageUrl} alt={episode.title} />
            </div>
            <div className="Episode__info">
                <h3>{episode.title}</h3>
            </div>
        </div>
    )
}

export default Episode;