import React from 'react';
import * as css from '../styles/search.css';

export class Search extends React.Component {
  render() {
    let searchByTitle;
    if(this.props.isTitleActive) {
      searchByTitle = <button type="button" className="btn btn-active">movies</button>
    } else {
      searchByTitle = <button
        type="button"
        onClick={this.props.onTitleClick}
        className="btn">title</button>
    }

    let searchByDirector;
    if(this.props.isDirectorActive) {
      searchByDirector = <button type="button" className="btn btn-active">director</button>
    } else {
      searchByDirector = <button type="button"
        onClick={this.props.onDirectorClick}
        className="btn">director</button>
    }

    return (
      <div className={css.searchContainer}>
        <h2 className={css.title}>Find your movie</h2>
        <form className="clearfix">
          <div>
            <input type="search" value={this.props.searchText} onChange={this.props.onSearchChange}/>
          </div>
          <div className={css.choice}>
            <span>Search by</span>
            {searchByTitle}
            {searchByDirector}
          </div>
          <div className={css.submitContainer}>
            <input type="submit" value="search" className="btn" onClick={this.props.onSubmitSearch}/>
          </div>
        </form>
      </div>
    )
  }
};

