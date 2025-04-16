// frontend/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostJob from './pages/PostJob';
import Header from './components/Header';
import Footer from './components/Footer';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div >
      <Header />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
