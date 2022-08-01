
import {default as EpisodeType}  from '../../Types/Episode';

import './Episode.scss';

const Episode = (episode: EpisodeType) => {

    const onClickHandler = () => {
        // Navigate to /video/{episode.streamMedia.id} in a new tab
        const baseUrl = process.env.PUBLIC_URL;
        window.open(`${baseUrl}/video/${episode.id}`, '_blank');
    }

    return (
        <div className='Episode' onClick={onClickHandler}>
            <div className="Episode__image">
                {/* <img src={episode.thumbnailUrl} alt={episode.title} /> */}
            </div>
            <div className="Episode__info">
                <h3>{episode.title}</h3>
            </div>
        </div>
    )
}

export default Episode;