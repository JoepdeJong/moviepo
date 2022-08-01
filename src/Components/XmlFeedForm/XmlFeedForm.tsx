import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { toast } from 'react-toastify';

import { addFeedUrl } from '../../redux/slices/XmlFeedsSlice';

import './XmlFeedForm.scss';
const XmlFeedForm = () => {
    const [feedUrl, setFeedUrl] = useState('');

    const dispatch = useAppDispatch();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(feedUrl.length > 0) {
            // Check if feedUrl is a valid url
            if (/^(http|https):\/\/[^ "]+$/.test(feedUrl)) {
                dispatch(addFeedUrl(feedUrl));
                setFeedUrl('');
            } else {
                toast.error('Invalid URL');
            }
        }
        setFeedUrl('');
    }

    return (
        <div className='XmlFeedForm'>
            <form className='inline' onSubmit={onSubmit}>
                <input type="text" className="input" placeholder='https://podimo.thijs.sh/feed/example%40example.com/this-is-my-password/12345-abcdef.xml' onChange={(e) => setFeedUrl(e.target.value)} value={feedUrl}/>
                <button type="submit" className="button">Add</button>
            </form>
        </div>
    );
};

export default XmlFeedForm;