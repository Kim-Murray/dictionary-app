import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    let results = {
      word: props.results[0].word,
      phonetic: props.results[0].phonetic,
      phoneticAudio: props.results[0].phonetics[0].audio,
      definition: props.results[0].meanings[0].definitions[0].definition,
    };

    console.log(results.phonetic);
    return (
      <div className="results">
        <h2>{results.word}</h2>
        <h3>{results.phonetic}</h3>
        {props.results[0].meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
