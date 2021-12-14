import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
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
