import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from "axios"
import TMDB from './TMDB';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'

class App extends Component {
  state = {
    films: TMDB.films,
    faves: [],
    current: {},
  };

  handleFaveToggle = (film) => {
    let faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);

    if (filmIndex === -1) {
      console.log(`Adding ${film.title} to faves`);
      faves.push(film);
    } else {
      console.log(`Removing ${film.title} to faves`);
      faves.splice(filmIndex, 1);
    }

    this.setState({faves});
  };

  handleDetailsClick = (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;

    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
      console.log(`Fetching details for ${film.title}`);
      this.setState({ current: response.data })
    })
  };

  render() {
    return (
      <div className="film-library">
        <FilmListing movie={TMDB} films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} onDetailsClick={this.handleDetailsClick} />
        <FilmDetails film={this.state.current} />
      </div>
      // <div className="App">
      //   <div className="film-library">
      //     <div className="film-list">
      //       <h1 className="section-title">FILMS</h1>
      //       <FilmListing movie={ TMDB }/>
      //     </div>
  
      //     <div className="film-details">
      //       <h1 className="section-title">DETAILS</h1>
      //       <FilmDetails />
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;