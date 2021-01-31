import React from "react";
import "./nav.scss";

function Nav() {
  return (
    <div className="nav">
      <div>
        <h2 className="nav__logo">FOR SENSITIVE PEOPLE</h2>
      </div>
      <ul className="nav__list">
        <li className="nav__link-items">
          <a className="nav__links" href="##">
            FIND
          </a>
        </li>
        <li className="nav__links-items">
          <a className="nav__links" href="##">
            ADD
          </a>
        </li>
        <li className="nav__links-items">
          <a className="nav__links" href="##">
            ABOUT
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
