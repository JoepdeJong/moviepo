import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Feed from '../../Types/Feed';

interface XmlFeedsState {
    feeds: Feed[];
}

const initialState = {
    feeds: [],
} as XmlFeedsState

const xmlFeedsSlice = createSlice({
    name: 'xmlFeed',
    initialState,
    reducers: {
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

export const { setFeeds, updateFeed, removeFeed } = xmlFeedsSlice.actions;

export default xmlFeedsSlice.reducer;