import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p>
              {definitions.definition} <em>eg. {definitions.example}</em>
            </p>
            <Synonyms synonyms={definitions.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
