import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Category from './components/pages/Category';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/about' element={<About />} />
          
        </Routes>
    </Router>
    </>
  );
}

export default App;
