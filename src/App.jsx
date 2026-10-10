import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Categories from './components/Categories';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Footer from './components/Footer';
import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Categories />
      <AboutUs />
      <Products />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
