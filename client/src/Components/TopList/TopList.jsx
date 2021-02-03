import React from "react";
import "./topList.scss";
import data from "../../data/data.json";
import { v4 as uuidv4 } from "uuid";

// data = JSON.parse(data);

function TopList() {
  return (
    <div className="top">
      <div className="top__container">
        <h5>TOP 10 BEST</h5>
        <h6>MOVIES</h6>
        <div className="top__best">
          <ol className="top__best-list">
            {data.movies.map((movie) => {
              return (
                <li key={uuidv4()} className="top__best-item">
                  {movie.name}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div className="top__container">
        <h5>TOP 10 BEST</h5>
        <h6>TV SHOWS</h6>

        <div className="top__best">
          <ol className="top__best-list">
            {data.movies.map((movie) => {
              return (
                <li key={uuidv4()} className="top__best-item">
                  {movie.name}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div className="top__container">
        <h5>TOP 10 WORST</h5>
        <h6>MOVIES</h6>

        <div className="top__best">
          <ol className="top__best-list">
            {data.movies.map((movie) => {
              return (
                <li key={uuidv4()} className="top__best-item">
                  {movie.name}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div className="top__container">
        <h5>TOP 10 WORST</h5>
        <h6>TV SHOWS</h6>

        <div className="top__best">
          <ol className="top__best-list">
            {data.movies.map((movie) => {
              return (
                <li key={uuidv4()} className="top__best-item">
                  {movie.name}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TopList;
