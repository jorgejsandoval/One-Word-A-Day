import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavButton from './components/NavButton.jsx';
import Home from './pages/Home.jsx';
import LanguageSelector from './pages/LanguageSelector.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';


function App() {

  

  return (
    <>
      <LanguageSwitcher/>
    <BrowserRouter>
    <div>
      {/* <nav>
        <Link to="\">Home</Link> | <Link>Select a Language</Link> | <Link>Words</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={< Home />}/>
        <Route path='/LanguageSelector' element={<LanguageSelector/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;