import React, { useState } from "react";
import "./searchResult.scss";
import arrow from "../../assets/icons/arrow-down.svg";
import upArrow from "../../assets/icons/up-arrow.svg";

function SearchResult(props) {
  let [showMoreMovies, setShowMoreMovies] = useState(false);
  let list = document.getElementsByClassName("results__list-item");
  let initialDisplay = 5;
  let maxDisplay = 10;
  let showMore = "results__show-more-btn";
  let hidden = "results__show-more-btn-hidden";

  //   Logic to loop over all the incoming movies and display them on the page
  let movies = [];
  if (props.result.Search) {
    props.result.Search.map((data) => {
      return movies.push(data);
    });
  }

  //   initial display only 5 items returned from api upon clicking show more arrow 10 items will be displayed
  let initialView = [];
  if (props.result.Search) {
    initialView = movies.slice(0, 5);
  }
  //   lets the value of what is to be displayed initially
  let moreOrLess;
  if (showMoreMovies === false) {
    moreOrLess = initialView;
  } else {
    moreOrLess = movies;
  }

  //   gives functionality to arrow
  let showMoreResults = () => {
    if (moreOrLess === initialView) {
      setShowMoreMovies(true);
    } else if (moreOrLess === movies) {
      setShowMoreMovies(false);
    }
  };

  let arrowDirection;
  if (showMoreMovies === false) {
    arrowDirection = arrow;
  } else {
    arrowDirection = upArrow;
  }

  // loadMore displays a button to show more movies loaded from the api to a max of 10
  let loadMore;
  if (movies.length >= 1) {
    loadMore = (
      <button onClick={() => showMoreResults()} className={showMore}>
        <img className="results__arrow" src={arrowDirection} alt="down arrow" />
      </button>
    );
  } else {
    loadMore = (
      <button className={hidden}>
        <img className="results__arrow" src={arrow} alt="down arrow" />
      </button>
    );
  }

  return (
    <div>
      <div className="results">
        <ul className="results__list">
          {moreOrLess.map((movie) => {
            return (
              <li className="results__list-item" key={movie.imdbID}>
                <h4 className="results__list-year">{movie.Year}</h4>
                <img
                  className="results__list-img"
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <h3 className="results__list-title">{movie.Title}</h3>
              </li>
            );
          })}
        </ul>
        {loadMore}
      </div>
    </div>
  );
}

export default SearchResult;
