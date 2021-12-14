import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "../styles/Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function searchWord(event) {
    event.preventDefault();

    let dictionaryURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios.get(dictionaryURL).then(handleResponse);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={searchWord}>
        <input type="search" placeholder="Type a word" onChange={updateWord} />
      </form>
      <Results results={results} />
    </div>
  );
}
