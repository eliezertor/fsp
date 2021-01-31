import React, { useEffect } from "react";

function SearchResult(props) {
  console.log(props.result);
  let title;
  let poster;

  if (props.result !== undefined) {
    props.result.Search.map((res) => {
      console.log(res);
      return (
        (title = <h3>Title:{res.Title}</h3>),
        (poster = <img src={res.Poster} alt="" />)
      );
    });
  }

  return (
    <div>
      <div>
        {title}
        {poster}
      </div>
    </div>
  );
}

export default SearchResult;
