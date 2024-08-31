import React from 'react';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Products from './components/Products';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
