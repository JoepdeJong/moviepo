import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Video from './Pages/Video';
import Home from './Pages/Home';
import How from "./Pages/How";

function App() {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/how" element={<How/>}/>
        <Route path="/video/:id" element={<Video/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
