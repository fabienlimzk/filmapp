import React, { Component } from 'react'

class FilmListing extends Component {
  render() {
    let AllFilms = this.props.list.films.map((film, i) => {
      return (
        <div className="film-row" key={i}>
          <img src={"https://image.tmdb.org/t/p/w780" + film.poster_path} alt="" />

          <div className="film-summary">
            <h1>{film.title}</h1>
            <p>{new Date(film.release_date).getFullYear()}</p>
          </div>
        </div>
      )
    });
    return (
      <div>
        {AllFilms}
      </div>
    )
  }
}

export default FilmListing
