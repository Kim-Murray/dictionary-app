import React, { useState } from "react";
import axios from "axios";

import "../styles/Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for the word ${word}.`);

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
    </div>
  );
}
