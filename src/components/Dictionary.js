import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "../styles/Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [meaningResults, setMeaningResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setMeaningResults(response.data);
  }

  function handlePhotos(response) {
    setPhotos(response.data.photos);
  }

  function getPhotos() {
    const pexelsApiKey =
      "563492ad6f91700001000001a1f4892181654e5e87b82b5d55f15c47";
    let photosURL = `https://api.pexels.com/v1/search?query=${word}&per_page=1`;

    axios
      .get(photosURL, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePhotos);
  }

  function searchWord(event) {
    getPhotos();
    event.preventDefault();

    let dictionaryURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios.get(dictionaryURL).then(handleResponse);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }
  return (
    <div className="dictionary">
      <section className="app-container">
        <form onSubmit={searchWord}>
          <h4>What word would you like to search for?</h4>
          <input
            type="search"
            placeholder="example: sunset"
            onChange={updateWord}
          />
        </form>
        <Results results={meaningResults} photos={photos} />
      </section>
    </div>
  );
}
