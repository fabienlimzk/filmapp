import React from 'react'
import FilmPoster from "./FilmPoster"
import Fave from "./Fave"

export default function FilmRow(props) {
  // handleDetailsClick = (film) => {
  //   // console.log(`Fetching details for ${film.title}`);
  //   props.onDetailsClick(film);
  // };
  
  const fullYear = new Date(props.film.release_date);
  return (
    <div className="film-row" onClick={() => props.onDetailsClick(props.film.title)}>
      <FilmPoster picture={props.film.poster_path} />
      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{fullYear.getFullYear()}</p>
      </div>
      <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave} />
    </div>
  )
}