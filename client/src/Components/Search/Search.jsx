import React, { useState } from "react";
import axios from "axios";
import "./search.scss";
// import env from "react-dotenv";

import SearchResult from "../SearchResult/SearchResult";

const omdb = "http://www.omdbapi.com/?";
let apiKey = "b9c1c16d";

function Search() {
  const [search, setSearch] = useState({ searchData: "" });
  const [searchResult, setSearchResult] = useState([]);

  let handleSubmit = (e) => {
    e.preventDefault();
    // const searchParams = search.searchData;

    axios
      .get(omdb + "s=" + search + "=&apikey=" + apiKey)
      .then((res) => {
        // console.log(res.data);
        setSearchResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(searchResult);

  return (
    <>
      <div className="search">
        <div className="search__container-left">
          <h2 className="search__slogan">Most people can watch anything. </h2>
        </div>
        <div className="search__container-right">
          <form className="search__form" type="text" onSubmit={handleSubmit}>
            <div className="search__input-container">
              <input
                className="search__input"
                placeholder="Search for poop"
                id="search"
                type="text"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button type="submit">Search</button>
            </div>
          </form>
          <div>
            <p className="search__tag">
              Check if the show or movie you want to watch is safe, for you.
            </p>
          </div>
        </div>
      </div>
      <SearchResult result={searchResult} />
    </>
  );
}

export default Search;
