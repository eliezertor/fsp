import React, { useState } from "react";
import axios from "axios";
import env from "react-dotenv";

import SearchResult from "../SearchResult/SearchResult";

const omdb = "http://www.omdbapi.com/?";
let apiKey = "b9c1c16d";

function Search() {
  const [search, setSearch] = useState({ searchData: "" });
  const [searchResult, setSearchResult] = useState(undefined);

  let handleSubmit = (e) => {
    e.preventDefault();
    // const searchParams = search.searchData;

    axios
      .get(omdb + "s=" + search + "=&apikey=" + apiKey)
      .then((res) => {
        console.log(res.data);
        setSearchResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(searchResult);

  return (
    <>
      <div>
        <form type="text" onSubmit={handleSubmit}>
          <input
            placeholder="Search for poop"
            id="search"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button type="submit">Search for</button>
        </form>
      </div>
      <SearchResult result={searchResult} />
    </>
  );
}

export default Search;
