import React from "react";
import "./CenterDiv.css";

function CenterDiv({ title, spantext, para, width }) {
  return (
    <div className="center-div">
      <span className="stylish">{spantext}</span>
      <h2>{title}</h2>
      <p>{para}</p>
    </div>
  );
}

export default CenterDiv;
