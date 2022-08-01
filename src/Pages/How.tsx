import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header';

import './How.scss';

const How = () => {
    return (
        <div className='How'>
            <Header/>
            <ul className='How__list'>
                <li>
                    <h2>What is Moviepo?</h2>
                    <p>Moviepo makes it possible to watch the videos of your favorite podcast show in your own browser. This gives a lot of cool features, e.g. more easily casting to Chromecast and Apple TV and Picutre in Picture view. <b>This app is for demonstration purposes. Using it is at your own risk.</b></p>
                </li>
                <li>
                    <h2>How can I play/add my own podcast episodes?</h2>
                    <p>Currently, due to authentication problems, it is not easy to load your own data in this app. Luckily, there are <a href="https://github.com/ThijsRay/podimo" target="_blank" title="Thijs" rel="noreferrer">open source heroes</a> out there that did some work in reverse engineering podcast apps authentication. His app (<a href="https://podimo.thijs.sh">podimo.thijs.sh</a>) makes it possible to access your own feed as XML. By browsing to e.g. <code>https://podimo.thijs.sh/feed/example%40example.com/this-is-my-password/12345-abcdef.xml</code> one can find an XML feed. Copy and paste this feed into the form on the <Link to="/feeds">feeds</Link> page and the episodes show up in the home screen.</p>
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