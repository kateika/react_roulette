import React from 'react'
import { connect } from 'react-redux';
import { setSortBy, SortBy } from '../actions/index';
import * as cssList from '../styles/movie-list.css';

const mapStateToProps = (state) => {
  return {
    isDateActive: state.sortBy === SortBy.SORT_BY_RELEASE_DATE,
    isRatingActive: state.sortBy === SortBy.SORT_BY_RATING
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDateClick: () => {
      dispatch(setSortBy(SortBy.SORT_BY_RELEASE_DATE));
    },
    onRatingClick: () => {
      dispatch(setSortBy(SortBy.SORT_BY_RATING));
    }
  }
};

let SortingContainer = (props) => {
  let sortByDate;
  if(props.isDateActive) {
    sortByDate = <button type="button" className={cssList.linkActive}>release date</button>;
  } else {
    sortByDate = <button type="button" onClick={props.onDateClick}>release date</button>;
  }

  let sortByRating;
  if(props.isRatingActive) {
    sortByRating = <button type="button" className={cssList.linkActive}>rating</button>;
  } else {
    sortByRating = <button type="button" onClick={props.onRatingClick}>rating</button>;
  }

  return (
    <div className={cssList.sorting}>
      <span>Sort by:</span>
      { sortByDate }
      { sortByRating }
    </div>
  )
};

SortingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortingContainer);

export { SortingContainer };
