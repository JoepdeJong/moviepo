import { NavLink } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <div className='Header'>
            <h1>MoviePo</h1>
            <p>A simple video player for podcast apps.</p>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/how">How</NavLink>
                <a href="https://github.com/JoepdeJong/moviepo" title="GitHub" target="_blank" rel="noreferrer">GitHub</a>
            </nav>
        </div>
    );
};

export default Header;