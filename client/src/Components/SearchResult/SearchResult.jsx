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
        <ul className="results__list">
          {movies.map((movie) => {
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
      </div>
    </div>
  );
}

export default SearchResult;
