import React from "react";
import "./recentReviewed.scss";
import data from "../../data/data.json";

function RecentReviewed() {
  let recent = data.movies;
  console.log(recent);

  return (
    <div className="recent">
      <div className="recent__title-container">
        <h6 className="recent__title">RECENTLY REVIEWED</h6>
      </div>
      <div className="recent__list-container">
        <ul className="recent__list">
          {recent.slice(0, 4).map((movies) => {
            console.log(movies);
            return (
              <li key={movies.imdbID} className="recent__list-item">
                <h4>{movies.Title}</h4>
                <img
                  className="recent__list-img"
                  src={movies.Poster}
                  alt={movies.Title}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RecentReviewed;
