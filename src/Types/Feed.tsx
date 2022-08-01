import Episode from "./Episode";

type Feed = {
    id: string;
    url: string;
    title: string;
    link: string;
    description: string;
    imageUrl: string;
    items: Episode[];
}

export default Feed;