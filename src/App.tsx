import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import InstagramButton from './components/InstagramButton';
import YouTubeButton from './components/YouTubeButton';
import Home from './pages/Home';
import Teachers from './pages/Teachers';
import Contact from './pages/Contact';
import Paymentpage from './pages/paymentpage';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col pt-20">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/paymentpage" element={<Paymentpage />} />
          </Routes>
        </main>
        <main className='flex-grow'></main>
        <main className="flex-grow"></main>
        <Footer />
        <WhatsAppButton />
        <InstagramButton />
        <YouTubeButton />
      </div>
    </Router>
  );
}

export default App;