// import logo from './logo.svg';
import './App.css';
import './source/bts.css'
import React, { useEffect } from 'react'
import nprogress from 'nprogress';
// import 'nprogress/nprogress.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './components/hero';
import Nav from './test/Navbar';
import Foot from './test/Footer'
import HeroSection from './components/h';
import Card from './components/card';
import Service from './components/service';

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Blog from './components/blog';
import Login from './components/auth/login';
import Register from './components/auth/register';

function App() {
  return (
    <Router>
      <div className="App">
        <ProgressBar />
        <Navbar title="Skytup" />
        {/* {<Nav />} */}

        {/* <Hello /> */}
        {/* <Card /> */}
        <Routes>
          <Route path="/" element={
            <HeroSection />
          } />
          <Route path="/about" element={<Card />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>


        {/* <Hello title="Akash"/> */}
        <Footer />
        {/* <Foot /> */}
      </div>
    </Router>
  );
}

function ProgressBar() {
  const location = useLocation();

  useEffect(() => {
    // Start the progress bar
    nprogress.start();

    // Stop the progress bar after some delay (simulate load time)
    const timer = setTimeout(() => {
      nprogress.done();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  return null; // This component doesn't render anything
}

export default App;
