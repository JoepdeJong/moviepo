type Episode = {
    id: string;
    title: string;
    description: string;
    artist: string;
    imageUrl: string;
    thumbnailUrl: string;
    podcastId: string;
    datetime: string;
    streamMedia: {
        duration: number;
        url: string;
        id: string;
    }
}

export default Episode;