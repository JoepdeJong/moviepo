import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface XmlFeedsState {
    feedUrls: string[];
    
}

const initialState = {
    feedUrls: [],
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
        }
    }
})

export const { addFeedUrl, removeFeedUrl } = xmlFeedsSlice.actions;

export default xmlFeedsSlice.reducer;