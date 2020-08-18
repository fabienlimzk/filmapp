import React, { Component } from 'react'
import FilmPoster from "./FilmPoster"
import Fave from "./Fave"

export default class FilmRow extends Component {
  handleDetailsClick = (film) => {
    console.log("Fetching details for " + film);
  }
  
  render() {
    const fullYear = new Date(this.props.movie.release_date);
    return (
      <div className="film-row" onClick={() => this.handleDetailsClick(this.props.movie.title)}>
        <FilmPoster picture={this.props.movie.poster_path} />
        <div className="film-summary">
          <h1>{this.props.movie.title}</h1>
          <p>{fullYear.getFullYear()}</p>
        </div>
        <Fave />
      </div>
    )
  }
}