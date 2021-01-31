import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [search, setSearch] = useState("");
  //  setSearch to be used when submitting value of search
  // console.log(searchValue);

  let handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = search;
    axios
      .post("/search", searchParams, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  console.log(search);

  return (
    <div>
      <form type="text" onSubmit={handleSubmit}>
        <input
          id="search"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit">Search for</button>
      </form>
    </div>
  );
}

export default Search;
