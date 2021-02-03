import React from "react";

function Footer() {
  let copyRight = new Date().getFullYear();

  return (
    <div>
      <div>
        <h4>FOR SENSITIVE PEOPLE</h4>
      </div>
      <div>
        <p>Copyright.{copyRight} </p>
      </div>
    </div>
  );
}

export default Footer;
