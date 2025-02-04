import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Search, Code, BookOpen, Trophy, ChevronDown } from 'lucide-react';
import "../source/h.css";

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({ y: scrollY * 0.5 });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="hero-section">
      <motion.div className="hero-background" animate={controls} />
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-text"
        >
          <h1>Learn with Skytup</h1>
          <p>Explore, code, compete: Courses, challenges, hackathons - your ultimate coding destination</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="search-container"
        >
          <div className="search-bar">
            <Search className="search-icon" />
            <input type="search" placeholder="Let's code together and challenge" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="search-button"
            >
              Search
            </motion.button>
          </div>
        </motion.div>

        <div className="feature-grid">
          {[
            { icon: BookOpen, title: 'Learn', description: 'Access comprehensive, industry-aligned coding courses' },
            { icon: Code, title: 'Practice', description: 'Solve real-world coding challenges and build projects' },
            { icon: Trophy, title: 'Compete', description: 'Participate in global coding contests and hackathons' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
              className="feature-card"
            >
              <item.icon className="feature-icon" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="scroll-indicator"
        >
          <p>Explore More</p>
          <ChevronDown className="chevron-down" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;