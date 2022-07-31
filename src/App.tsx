import './App.css';
import ReactPlayer from 'react-player';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Player from './Components/Player/Player';
import Login from './Pages/Login';
import Video from './Pages/Video';
import Rss from './Pages/Rss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rss/>}/>
        <Route path="/video/:id" element={<Video/>}/>
        {/* <Route path="/episode/:id"> */}
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Player id="..." />
    // </div>
  );
}

export default App;
