import React, { useState } from "react";

import "../styles/Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for the word ${word}.`);
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
