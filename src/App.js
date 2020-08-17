import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TMDB from './TMDB';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'

function App() {
  return (
    <div className="App">
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <FilmListing list={TMDB}/>
        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          <FilmDetails />
        </div>
      </div>
    </div>
  );
}

export default App;