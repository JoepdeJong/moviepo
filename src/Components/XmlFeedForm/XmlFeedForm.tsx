import React, { useState } from 'react';
import { toast } from 'react-toastify';

import './XmlFeedForm.scss';
import { parseRssFeed } from '../../utils/functions';
const XmlFeedForm = () => {
    const [feedUrl, setFeedUrl] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(feedUrl.length > 0) {
            // Check if feedUrl is a valid url
            if (/^(http|https):\/\/[^ "]+$/.test(feedUrl)) {
                parseRssFeed(feedUrl);
                setFeedUrl('');
            } else {
                toast.error('Invalid URL');
            }
        }
        setFeedUrl('');
    }

    return (
        <div className='XmlFeedForm'>
            <p>Retreive a RSS-feed link from <a target={'_blank'} rel="noreferrer" href="https://podimo.thijs.sh">podimo.thijs.sh</a></p>
            <form className='inline' onSubmit={onSubmit}>
                <input type="text" className="input" placeholder='https://podimo.thijs.sh/feed/example%40example.com/this-is-my-password/12345-abcdef.xml' onChange={(e) => setFeedUrl(e.target.value)} value={feedUrl}/>
                <button type="submit" className="button">Add</button>
            </form>
        </div>
    );
};

export default XmlFeedForm;