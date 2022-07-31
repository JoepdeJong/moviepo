import { useParams } from 'react-router-dom';
import Player from '../Components/Player/Player';

const Video = () => {
    let params = useParams();

    const id: string = params.id!;
    return (
        <div>
            <Player id={id} />
        </div>
    );
};

export default Video;