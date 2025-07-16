import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tours from './pages/Tours';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Book from './pages/Book';
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen flex flex-col justify-between">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
