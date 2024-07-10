import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Pokemon from './components/Pokemon';
import PokemonDetails from './components/PokemonDetails';

function App() {
  const url = '/';
  return (
    <Router> 
      <div className='.love-ya'>
        <Header />
        <div>
          <main>
            <div className="container">
              <Routes>
                <Route path={`${url}Pokemon/:PokemonId`} element={<PokemonDetails />} />
                <Route path={url} element={<Pokemon />} />
              </Routes>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </Router> 
  );
}
export default App;
