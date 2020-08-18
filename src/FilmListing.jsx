import React, { Component } from 'react'
import FilmRow from "./FilmRow"
export default class FilmListing extends Component {
  render() {
    let allFilms = this.props.movie.films.map( (film, index) => (<FilmRow key = {film.id} movie = {film}/> ))
    return (
      <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          {allFilms}
      </div>
    )
  }
}