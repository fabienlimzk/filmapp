import React from 'react'

export default function FilmPoster(props) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w780${props.picture}`} alt="" />
    </div>
  )
}