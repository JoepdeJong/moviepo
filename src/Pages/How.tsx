import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';

import './How.scss';

const How = () => {
    const navigate = useNavigate();

    return (
        <div className='How'>
            <Header/>
            <ul className='How__list'>
                <li>
                    <h2>What is Moviepo?</h2>
                    <p>Moviepo makes it possible to watch the videos of your favorite podcast show in your own browser. This gives a lot of cool features, e.g. more easily casting to Chromecast and Apple TV and Picutre in Picture view. <b>This app is for demonstration purposes. Using it is at your own risk.</b></p>
                </li>
                <li>
                    <h2>Why are not all podcasts automatically available?</h2>
                    <p>Since some of the podcast that can be played with this app have paid subscriptions, it is allowed to provide users with these podcasts without signing them in on their own account. Due to CORS problems, it is not possible to sign in a user to podcast apps directly from the browser. To resolve this problem, a webserver is needed that retreives the users podcastfeed from a podcast app. This means that the server makes requests to the podcast app with different credentials for different users, resulting in an insecurity for the users (sharing their credentials) and a risk for the host of the server (possibly expoloiting the podcasts app API). Hopefully, the CORS problem can be resolved in future versions of this app, which makes a completely client-side application possible.</p>
                </li>
                <li>
                    <h2>How can I play/add my own podcast episodes?</h2>
                    <p>Currently, due to authentication problems, it is not easy to load your own data in this app. Luckily, there are <a href="https://github.com/ThijsRay/podimo" target="_blank" title="Thijs" rel="noreferrer">open source heroes</a> out there that did some work in reverse engineering podcast apps authentication. His app (<a href="https://podimo.thijs.sh">podimo.thijs.sh</a>) makes it possible to access your own feed as XML. By browsing to e.g. <code>https://podimo.thijs.sh/feed/example%40example.com/this-is-my-password/12345-abcdef.xml</code> one can find an XML feed. An episode media ID can be retreived from this feed by looking for an URL that looks like <code>https://cdn.xxxx.com/audios/xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx.mp3</code> copy and paste the ID in the following field, or navigate to <code>/video/xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx</code> to open the video player. Note that not every episode in the RSS is provided with a video.</p>
                    <input type="text" placeholder="xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx" onChange={(e) => navigate('/video/'+e.target.value) }/>
                </li>
                <li>
                    <h2>Picture in Picture</h2>
                    <p>Moviepo supports Picture in Picture. This means that you can watch the video in the background and the audio in the foreground. This is useful for watching a podcast show in the background while you listen to the audio in the foreground.</p>
                    <h3>Picture in Picture on iOS</h3>
                    <img src={process.env.PUBLIC_URL+'/img/moviepo-ios.png'} alt='Example of PIP on IOS' />
                    <h3>Picture in Picture on OS X</h3>
                    <img src={process.env.PUBLIC_URL+'/img/moviepo-osx.png'} alt='Example of PIP on OSX' />
                </li>
            </ul>
        </div>
    );
};

export default How;