import React from "react";
import "./searchResult.scss";

function SearchResult(props) {
  let movies = [];

  if (props.result.Search) {
    props.result.Search.map((res) => {
      return movies.push(res);
    });
  }

  return (
    <div>
      <div className="results">
        {movies.map((movie) => {
          // FIXME:   console.log(movie);
          return (
            <ul className="results__list">
              <li className="results__list-item" key={movie.imdbID}>
                <h3 className="results__list-title">Title:{movie.Title}</h3>
                <h4 className="results__list-year">Year:{movie.Year}</h4>
                <img
                  className="results__list-img"
                  src={movie.Poster}
                  alt={movie.Title}
                />
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResult;
