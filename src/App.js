import './App.css';
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import About from './Pages/About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div className = "App">
        <Navbar />
        <div>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
