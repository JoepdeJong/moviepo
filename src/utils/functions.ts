import Feed from "../Types/Feed";
import Episode from "../Types/Episode";

import { updateFeed } from '../redux/slices/XmlFeedsSlice';
import { store } from "../redux/store";

export const parseRssFeed = async (feedUrl: string) : Promise<Feed>  => {
    const res = await fetch(feedUrl);

    // Parse the response as XML
    let xml = await res.text();
    const parser = new DOMParser();

    // Replace 'itunes:duration' with 'duration'
    xml = xml.replace(/itunes:duration/g, 'duration');

    const data = parser.parseFromString(xml, "text/xml");

    let feed : Feed = {
        url: feedUrl,
        id: feedUrl.split('/').pop()!.split('.').shift()!,
        title: data.querySelector('channel > title')!.textContent || '',
        link: data.querySelector('channel > link')!.textContent || '',
        description: data.querySelector('channel > description')!.textContent || '',
        imageUrl: data.querySelector('channel > image > url')!.textContent || '',
        items: []
    }

    let items = data.querySelectorAll('channel > item');
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        
        const url = item.querySelector('enclosure')!.getAttribute('url')!;
        // Get the filename without extension
        const id = url.split('/').pop()!.split('.').shift()!;

        // const date = new Date(item.querySelector('pubDate')!.textContent!);

        let Episode: Episode = {
            id,
            title: item.querySelector('title')!.textContent || '',
            description: item.querySelector('description')!.textContent || '',
            // date,
            duration: parseInt(item.querySelector('duration')!.textContent!) || 0,
            url,
        }
        feed.items.push(Episode);
    }

    store.dispatch(updateFeed(feed));

    return feed;
}