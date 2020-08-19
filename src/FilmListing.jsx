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
    const allFilms = this.props.films.map((film) => {
      return (
        <FilmRow
          film={film}
          key={film.id}
          onFaveToggle={() => this.props.onFaveToggle(film)}
          isFave={this.props.faves.includes(film)}
          onDetailsClick={() => this.props.onDetailsClick(film)}
        />
      );
    });
    const allFaves = this.props.faves.map((film) => {
      return (
        <FilmRow
          film={film}
          key={film.id}
          onFaveToggle={() => this.props.onFaveToggle(film)}
          isFave={this.props.faves.includes(film)}
          onDetailsClick={() => this.props.onDetailsClick(film)}
        />
      );
    });
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={this.state.filter === 'all' ? 'film-list-filter is-active' : 'film-list-filter'} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={this.state.filter === 'faves' ? 'film-list-filter is-active' : 'film-list-filter'} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>
        {(this.state.filter) === "all" ? allFilms : allFaves}
      </div>
    )
  }
}