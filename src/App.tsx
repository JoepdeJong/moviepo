import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Video from './Pages/Video';
import Home from './Pages/Home';
import How from "./Pages/How";
import Feeds from "./Pages/Feeds";

function App() {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/feeds" element={<Feeds/>}/>
        <Route path="/how" element={<How/>}/>
        <Route path="/video/:id" element={<Video/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
