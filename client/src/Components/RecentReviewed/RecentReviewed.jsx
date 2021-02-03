import React from "react";
import "./recentReviewed.scss";

function RecentReviewed() {
  return (
    <div className="recent">
      <div className="recent__title-container">
        <h6 className="recent__title">RECENTLY REVIEWED</h6>
      </div>
      <div className="recent__list-container">
        <ul className="recent__list">
          <li className="recent__list-item"></li>
        </ul>
      </div>
    </div>
  );
}

export default RecentReviewed;
