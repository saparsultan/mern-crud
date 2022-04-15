import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Friends from './pages/Friends';
import Header from './components/Header';

import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="friends" element={<Friends />} />
        </Routes>
        <footer className="footer">
          <p className="footer__text">
            (MongoDB - Express - React - Node.js)
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
