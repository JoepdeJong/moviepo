import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import Feed from '../../Types/Feed';

interface XmlFeedsState {
    feedUrls: string[];
    feeds: Feed[];
}

const initialState = {
    feedUrls: [],
    feeds: [],
} as XmlFeedsState

const xmlFeedsSlice = createSlice({
    name: 'xmlFeed',
    initialState,
    reducers: {
        addFeedUrl: (state: XmlFeedsState, action: PayloadAction<string>) => {
            // Check if the feed url is already in the list
            if (state.feedUrls.indexOf(action.payload) === -1) {
                state.feedUrls.push(action.payload);
                toast.success("Feed successfully added");
            } else {
                toast.error("Feed already exists");
            }
        },
        removeFeedUrl: (state: XmlFeedsState, action: PayloadAction<string>) => {
            state.feedUrls = state.feedUrls.filter(url => url !== action.payload)
        },
        setFeeds: (state: XmlFeedsState, action: PayloadAction<Feed[]>) => {
            state.feeds = action.payload;
        },
        updateFeed: (state: XmlFeedsState, action: PayloadAction<Feed>) => {
            const index = state.feeds.findIndex(feed => feed.url === action.payload.url);
            if (index !== -1) {
                state.feeds[index] = action.payload;
            } else {
                state.feeds.push(action.payload);
            }
        },
        removeFeed: (state: XmlFeedsState, action: PayloadAction<string>) => {
            state.feeds = state.feeds.filter(feed => feed.url !== action.payload);
        }
    }
})

export const { addFeedUrl, removeFeedUrl, setFeeds, updateFeed, removeFeed } = xmlFeedsSlice.actions;

export default xmlFeedsSlice.reducer;