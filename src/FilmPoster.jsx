import React, { Component } from 'react'

export default class FilmPoster extends Component {
  render() {
    return (
      <div>
        <img src={"https://image.tmdb.org/t/p/w780" + this.props.picture} alt="" />
      </div>
    )
  }
}