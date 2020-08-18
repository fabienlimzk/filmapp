import React, { Component } from 'react'
import FilmPoster from "./FilmPoster"

export default class FilmRow extends Component {
  render() {
    const fullYear = new Date(this.props.movie.release_date);
    return (
      <div className="film-row">
        <FilmPoster picture = {this.props.movie.poster_path}/>
        <div className="film-summary">
          <h1>{this.props.movie.title}</h1>
          <p>{fullYear.getFullYear()}</p>
        </div>
      </div>
    )
  }
}