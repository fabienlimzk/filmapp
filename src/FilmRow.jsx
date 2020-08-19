import React, { Component } from 'react'
import FilmPoster from "./FilmPoster"
import Fave from "./Fave"

export default class FilmRow extends Component {
  handleDetailsClick = (film) => {
    // console.log(`Fetching details for ${film.title}`);
    this.props.onDetailsClick(film);
  }
  
  render() {
    const fullYear = new Date(this.props.film.release_date);
    return (
      <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film.title)}>
        <FilmPoster picture={this.props.film.poster_path} />
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{fullYear.getFullYear()}</p>
        </div>
        <Fave onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave} />
      </div>
    )
  }
}