import React, { Component } from 'react'
import FilmRow from "./FilmRow"
export default class FilmListing extends Component {
  state = {
    filter: "all",
  }

  handleFilterClick = (filter) => {
    console.log("Setting filter to " + filter);
    this.setState({ filter: filter });
  }

  render() {
    let allFilms = this.props.movie.films.map( (film, index) => (<FilmRow key={index} movie={film} />))
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={this.state.filter === 'all' ? 'film-list-filter is-active' : 'film-list-filter'} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.movie.films.length}</span>
          </div>
          <div className={this.state.filter === 'faves' ? 'film-list-filter is-active' : 'film-list-filter'} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

        {allFilms}
      </div>
    )
  }
}