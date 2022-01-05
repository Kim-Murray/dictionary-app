import React from "react";
import Synonyms from "./Synonyms";

import "../styles/Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <section>
        <h5>{props.meaning.partOfSpeech}</h5>
        {props.meaning.definitions.map(function (definitions, index) {
          return (
            <div key={index}>
              <div>
                {definitions.definition}{" "}
                <em>
                  <br />{" "}
                  <div className="example">eg. {definitions.example}</div>
                </em>
              </div>
              <Synonyms synonyms={definitions.synonyms} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
