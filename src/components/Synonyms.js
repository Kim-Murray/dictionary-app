import React from "react";

import "../styles/Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length === 0) {
    return null;
  } else
    return (
      <div className="synonyms">
        <h6>synonyms</h6>
        {props.synonyms.map(function (synonym, index) {
          if (index === props.synonyms.length - 1) {
            return (
              <span key={index}>
                {synonym}
                <br />
                <br />
              </span>
            );
          } else return <span key={index}>{synonym}, </span>;
        })}
      </div>
    );
}
